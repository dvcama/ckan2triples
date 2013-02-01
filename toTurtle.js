var http = require('http');
var fs = require('fs');
var $ = require('jquery');
console.log('starting!');

/* carico il profilo 1 */
// fs.readFile("profile.piemonte.js", "UTF-8", function(err, data) {
// if (err)
// throw err;
// start(JSON.parse(data));
// });
/* carico il profilo 2 */
// fs.readFile("profile.provinciaRoma.js", "UTF-8", function(err, data) {
// if (err)
// throw err;
// start(JSON.parse(data));
// });
fs.readFile("profile.toscana.js", "UTF-8", function(err, data) {
	if (err)
		throw err;
	start(JSON.parse(data));
});

/* si parte! */
function start(jConfig) {
	/* eliminiamo l'eventuale file di output precedente */
	fs.unlink(jConfig.resultFileName, function() {
	});

	/* lista dei package */
	http.get(jConfig.packageListUrl, function(res) {
		res.setEncoding('utf8');
		var resText = "";
		res.on('data', function(chunk) {
			resText += chunk;
		});
		res.on('end', function() {
			var resArray = JSON.parse(resText);

			/* informazioni sul catalogo */
			catalogInfo(jConfig);

			for ( var int = 0; int < resArray.length; int++) {
				singleDataset(resArray[int]);
			}
		});
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});

	/* singolo package */
	function singleDataset(dataId) {
		console.log("processing " + jConfig.singlePackageBaseUrl + dataId);

		http.get(jConfig.singlePackageBaseUrl + dataId, function(res) {
			res.setEncoding('utf8');
			var resText = "";
			res.on('data', function(chunk) {
				resText += chunk;
			});
			res.on('end', function() {
				/* response in json */
				var resJ = JSON.parse(resText);
				var map = jConfig.datasetMap;
				$.each(map, function(key, params) {
					/* genero la uri della nuova risorsa */
					var resourceUri = generateUri(res.req.path, jConfig);

					/* inserisco eventuali triple fisse */
					datasetInfo(resourceUri, jConfig);

					/* produco la singola riga */
					var row = createRow(resourceUri, key, params, resJ);

					/* scrivo su disco */
					writeRow(row, jConfig.resultFileName);
				});
			});
		}).on('error', function(e) {
			console.log("Got error: " + e.message);
		});
	}
}

function generateUri(resourceUri, jConfig) {
	if (jConfig.resourceUriSubstitutor && jConfig.resourceUriSubstitutor.replace && jConfig.resourceUriSubstitutor.find) {
		resourceUri = resourceUri.replace(new RegExp(jConfig.resourceUriSubstitutor.find), jConfig.resourceUriSubstitutor.replace);
	}
	return resourceUri;
}

function catalogInfo(jConfig) {
	if (jConfig.catalogInfo) {
		$.each(jConfig.catalogInfo, function(key, value) {
			writeRow(value + ".\n", jConfig.resultFileName);
		});
	}
}

function datasetInfo(resourceUri, jConfig) {
	if (jConfig.datasetInfo) {
		$.each(jConfig.datasetInfo, function(key, value) {
			writeRow(value.replace(/\{\{URI\}\}/g, resourceUri) + ".\n", jConfig.resultFileName);
		});
	}
}

function writeRow(row, resultFileName) {
	if ($.trim(row) != '') {
		fs.appendFile(resultFileName, row, function(err) {
			if (err)
				throw err;
		});
	}
}

function createRow(resourceUri, key, params, resJ) {
	var row = "<" + resourceUri + ">\t";
	/* riconduco tutto ad array per limitare il numero dei casi da gestire */
	if (typeof resJ[key] != typeof []) {
		resJ[key] = [ resJ[key] ];
	}
	if (resJ[key]) {
		if (params.type == 'map') {
			row = "";
			for ( var int = 0; int < resJ[key].length; int++) {
				if (params.hasOwnUri) {
					row += "<" + resourceUri + ">\t" + params.uri + "\t<" + resourceUri + (params.hasOwnUri ? (params.suffix ? params.suffix : "") + int : "") + ">.\n";
				}
				$.each(params, function(innerKey, innerParams) {
					if (typeof innerParams == typeof {}) {
						if (resJ[key][int]) {
							row += createRow(resourceUri + (params.hasOwnUri ? (params.suffix ? params.suffix : "") + int : ""), innerKey, innerParams, resJ[key][int]);
						}
					}
				});
			}
		} else {
			for ( var int = 0; int < resJ[key].length; int++) {
				if (resJ[key][int]) {
					var val = $.trim(resJ[key][int]);
					if (params.type == 'string') {
						if (val.match(/\n/)) {
							val = '""' + val + '""';
						}
						row += params.uri + '\t"' + val + '";\t';
					} else if (params.type == 'uri') {
						row += params.uri + '\t<' + generateUri((params.prefix ? params.prefix : "") + resJ[key][int], params) + '>;\t';
					} else {
						row += params.uri + '\t' + val + ';\t';
					}
				}
			}
			if (row.lastIndexOf(";") > 0) {
				row = row.substring(0, row.lastIndexOf(";"));
			}
			row += ".\n";
		}
	} else {
		row = "";
	}
	if (row.split("\t").length < 3) {
		row = "";
	}
	return row;
}
