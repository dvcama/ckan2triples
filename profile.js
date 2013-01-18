{ 
	"packageListUrl" : "http://www.dati.piemonte.it/rpapisrv/api/rest/package",
	"singlePackageBaseUrl" : "http://www.dati.piemonte.it/rpapisrv/api/rest/package/",
	"resultFileName" : "dati.piemonte.n3",
	"resourceUriSubstitutor" : {
		"find" : "/rpapisrv/api/rest/package",
		"replace" : "http://data.opendataday.it/resource/dati.piemonte"
	},
	"map" : {
		"title" : {
			"uri" : "<http://purl.org/dc/elements/1.1/title>",
			"type" : "string"
		},  
			"tags" : {
				"uri" : "<http://purl.org/dc/terms/subject>",
				"type" : "string" 
			},  
			"extras" : {
				"type" : "map",
				"license_id" : {
					"uri" : "<http://purl.org/dc/terms/license>",
					"type" : "string" 
				}
			}
	}
}