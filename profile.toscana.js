{
	"catalogInfo" : [ "<http://data.opendataday.it/resource/dati.toscana> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/ns/dcat#Catalog>" ],
	"packageListUrl" : "http://dati.toscana.it/api/rest/package",
	"singlePackageBaseUrl" : "http://dati.toscana.it/api/rest/package/",
	"resultFileName" : "dati.toscana.turtle",
	"resourceUriSubstitutor" : {
		"find" : "/api/rest/package",
		"replace" : "http://data.opendataday.it/resource/dati.toscana"
	},
	"datasetInfo" : [ "<http://data.opendataday.it/resource/dati.toscana>  <http://www.w3.org/ns/dcat#dataset> <{{URI}}>" ],
	"datasetMap" : {
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
			"hasOwnUri" : true,
			"suffix" : "/distribution/",
			"uri" : "<http://www.w3.org/ns/dcat#distribution>",
			"description" : {
				"uri" : "<http://purl.org/dc/terms/description>",
				"type" : "string"
			},
			"url" : {
				"uri" : "<http://www.w3.org/ns/dcat#accessURL>",
				"type" : "uri",
				"resourceUriSubstitutor" : {
					"find" : "^/",
					"replace" : "http://dati.toscana.it/"
				}
			},
			"format" : {
				"uri" : "<http://rdfs.org/ns/void#format>",
				"type" : "string"
			}
		}
	}
}