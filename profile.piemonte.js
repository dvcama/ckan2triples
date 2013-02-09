{ 
	
	"catalogInfo" : [ "<http://data.opendataday.it/resource/dati.piemonte> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/dcat#Catalog>" ],
	"packageListUrl" : "http://www.dati.piemonte.it/rpapisrv/api/rest/package",
	"singlePackageBaseUrl" : "http://www.dati.piemonte.it/rpapisrv/api/rest/package/",
	"resultFileName" : "dati.piemonte.n3",
	"resourceUriSubstitutor" : {
		"find" : "/rpapisrv/api/rest/package",
		"replace" : "http://data.opendataday.it/resource/dati.piemonte"
	},
	"datasetInfo" : [ "<http://data.opendataday.it/resource/dati.piemonte>  <http://www.w3.org/ns/dcat#dataset> <{{URI}}>" ],
	"datasetMap" : {
		"title" : {
			"uri" : "<http://purl.org/dc/elements/1.1/title>",
			"type" : "string"
		},  
		"notes" : {
			"uri" : "<http://purl.org/dc/terms/description>",
			"type" : "string" 
		},
			"tags" : {
				"uri" : "<http://www.w3.org/ns/dcat#keyword>",
				"type" : "uri",
				"prefix":"http://data.opendataday.it/resource/tag/",
				"resourceUriSubstitutor" : {},
				"forceLowerCase":true
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
				"suffix":"/distribution/dis",
				"uri":"<http://www.w3.org/ns/dcat#distribution>",
				"url" : {
					"uri" : "<url>",
					"type" : "string" 
				},
				"url" : {
					"uri" : "<http://www.w3.org/ns/dcat#accessURL>",
					"type" : "uri" 
				},
				"format" : {
					"uri" : "<http://rdfs.org/ns/void#format>",
					"type" : "string" 
				}
			}
	}
}