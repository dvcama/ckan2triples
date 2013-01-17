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
				var resJ = JSON.parse(resText);
				var map = jConfig.map;
				$.each(map, function(key, params) {
					/* genero la uri della nuova risorsa */
					var resourceUri = res.req.path;
					if (jConfig.resourceUriSubstitutor && jConfig.resourceUriSubstitutor.replace && jConfig.resourceUriSubstitutor.find) {
						resourceUri = resourceUri.replace(new RegExp(jConfig.resourceUriSubstitutor.find), jConfig.resourceUriSubstitutor.replace);
					} 

					/* scrivo la tripla */ 
					var row = "<"+resourceUri + ">\t" + params.uri + "\t";
					if (params.type == 'string') {
						row += '"' + resJ[key] + '"';
					} else {
						row += resJ[key];
					}
					fs.appendFile(jConfig.resultFileName, row + "\n", function(err) {
						if (err)
							throw err;
					});
				});
			});
		}).on('error', function(e) {
			console.log("Got error: " + e.message);
		});
	}
}

/*
 * if (!dashboard) { dashboard = fs.readFileSync('html/dashboard.html',
 * 'UTF-8'); jDash = $(dashboard); }
 */
