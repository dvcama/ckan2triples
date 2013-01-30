{ 
  "packageListUrl" : "http://dati.toscana.it/api/rest/package",
	"singlePackageBaseUrl" : "http://dati.toscana.it/api/rest/package/",
	"resultFileName" : "dati.toscana.rev_MB.n3",
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
				"uri" : "<http://www.w3.org/ns/dcat#keyword>",
				"type" : "string"
			},  
			"extras" : {
				"type" : "map",
				"license_id" : {
					"uri" : "<http://purl.org/dc/terms/rights>",
					"type" : "string" 
				}
			},  
			"resources" : {
				"type" : "map",
				"hasOwnUri":true,
				"suffix":"/distribution/",
				"uri":"<http://www.w3.org/ns/dcat#distribution>",
				"url" : {
					"uri" : "<http://www.w3.org/ns/dcat#accessURL>",
					"type" : "string" 
				},
				"description" : {
					"uri" : "<http://purl.org/dc/terms/description>",
					"type" : "string" 
				},
				"format" : {
					"uri" : "<http://rdfs.org/ns/void#format>",
					"type" : "string" 
				}
			}
	}
}
