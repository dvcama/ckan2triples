var http = require('http');
var fs = require('fs');
var $ = require('jquery');
console.log('starting!');

/* carico il profilo */
fs.readFile("profile.js", "UTF-8", function(err, data) {
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
		// console.log('STATUS: ' + res.statusCode);
		// console.log('HEADERS: ' + JSON.stringify(res.headers));
		res.setEncoding('utf8');
		var resText = "";
		res.on('data', function(chunk) {
			resText += chunk;
		});
		res.on('end', function() {
			var resArray = JSON.parse(resText);
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
				var map = jConfig.map;
				$.each(map, function(key, params) {
					/* genero la uri della nuova risorsa */
					var resourceUri = generateUri(res.req.path, jConfig);

					/* produco la singola riga */
					var row = writeRow(resourceUri, key, params, resJ);

					/* scrivo su disco */
					if ($.trim(row) != '') {
						fs.appendFile(jConfig.resultFileName, row + ".\n", function(err) {
							if (err)
								throw err;
						});
					}
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

function writeRow(resourceUri, key, params, resJ) {
	var row = "<" + resourceUri + ">\t";
	if (resJ[key]) {
		if (params.type == 'string') {
			if (typeof resJ[key] == "string") {
				row += params.uri + '\t"' + resJ[key] + '"';
			} else {
				for ( var int = 0; int < resJ[key].length; int++) {
					row += params.uri + '\t"' + resJ[key][int] + '";\t';
				}
				row = row.substring(0, row.lastIndexOf(";"));
			}
		} else if (params.type == 'map') {
			row = "";
			$.each(params, function(innerKey, innerParams) {
				if (typeof innerParams == typeof {}) {
					row += writeRow(resourceUri, innerKey, innerParams, resJ[key]) + ".\n";
				}
				row = row.substring(0, row.lastIndexOf("."));
			});
		} else {
			row += resJ[key];
		}
	} else {
		row = "";
	}

	return row;
}
