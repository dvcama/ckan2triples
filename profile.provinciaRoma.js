{ 
	"packageListUrl" : "http://www.opendata.provincia.roma.it/api/rest/package",
	"singlePackageBaseUrl" : "http://www.opendata.provincia.roma.it/api/rest/package/",
	"resultFileName" : "dati.provinciadiroma.n3",
	"resourceUriSubstitutor" : {
		"find" : "/api/rest/package",
		"replace" : "http://data.opendataday.it/resource/dati.provincia.roma"
	},
	"map" : {
		"title" : {
			"uri" : "<http://purl.org/dc/elements/1.1/title>",
			"type" : "string"
		},  
			"tags" : {
				"uri" : "<http://purl.org/dc/terms/subject>",
				"type" : "uri",
				"prefix":"http://data.opendataday.it/resource/dati.piemonte/tag/",
				"resourceUriSubstitutor" : {}
			},  
			"resources" : {
				"type" : "map",
				"hasOwnUri":true,
				"suffix":"/res/",
				"uri":"<hasResource>",
				"url" : {
					"uri" : "<url>",
					"type" : "string" 
				},
				"name" : {
					"uri" : "<http://purl.org/dc/elements/1.1/title>",
					"type" : "string" 
				},
				"format" : {
					"uri" : "<format>",
					"type" : "string" 
				}
			}
	}
}