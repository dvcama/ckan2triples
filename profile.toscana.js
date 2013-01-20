{ 
	"packageListUrl" : "http://dati.toscana.it/api/rest/package",
	"singlePackageBaseUrl" : "http://dati.toscana.it/api/rest/package/",
	"resultFileName" : "dati.toscana.n3",
	"resourceUriSubstitutor" : {
		"find" : "/api/rest/package",
		"replace" : "http://data.opendataday.it/resource/dati.toscana"
	},
	"map" : {
		"title" : {
			"uri" : "<http://purl.org/dc/elements/1.1/title>",
			"type" : "string"
		},  
			"tags" : {
				"uri" : "<http://purl.org/dc/terms/subject>",
				"type" : "uri",
				"prefix":"http://data.opendataday.it/resource/dati.toscana/tag/",
				"resourceUriSubstitutor" : {}
			},  
			"extras" : {
				"type" : "map",
				"license_id" : {
					"uri" : "<http://purl.org/dc/terms/license>",
					"type" : "string" 
				}
			},  
			"resources" : {
				"type" : "map",
				"hasOwnUri":true,
				"suffix":"/res/",
				"uri":"<hasResource>",
				"url" : {
					"uri" : "<url>",
					"type" : "uri" ,
					"prefix":"http://dati.toscana.it"
				},
				"description" : {
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