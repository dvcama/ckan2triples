var http = require('http');
var fs = require('fs');
var sys = require('sys');
var $ = require('jquery');
console.log('starting!');

/* lista dei package */
http.get("http://www.dati.piemonte.it/rpapisrv/api/rest/package", function(res) {
	// console.log('STATUS: ' + res.statusCode);
	// console.log('HEADERS: ' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	var resText = "";
	res.on('data', function(chunk) {
		resText += chunk;
	});
	res.on('end', function() {
		var resArray = JSON.parse(resText);
		for ( var int = 0; int < resArray.length && int < 5; int++) {
			console.log(resArray[int]);
			singleDataset(resArray[int]);
		}
	});
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});

/* singolo package */
function singleDataset(dataId) {
	http.get("http://www.dati.piemonte.it/rpapisrv/api/rest/package/" + dataId, function(res) {
		// console.log('STATUS: ' + res.statusCode);
		// console.log('HEADERS: ' + JSON.stringify(res.headers));
		res.setEncoding('utf8');
		var resText = "";
		res.on('data', function(chunk) {
			resText += chunk;
		});
		res.on('end', function() {
			var resJ = JSON.parse(resText);
			console.log(resJ.title);
		});
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});
}

/*
 * if (!dashboard) { dashboard = fs.readFileSync('html/dashboard.html',
 * 'UTF-8'); jDash = $(dashboard); }
 */
