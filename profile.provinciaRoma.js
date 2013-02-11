{ 
	"catalogInfo" : [ "<http://data.opendataday.it/resource/dati.provinciaRoma>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/ns/dcat#Catalog>" ],
	"packageListUrl" : "http://www.opendata.provincia.roma.it/api/rest/package",
	"singlePackageBaseUrl" : "http://www.opendata.provincia.roma.it/api/rest/package/",
	"resultFileName" : "dati.provinciaRoma.n3",
	"resourceUriSubstitutor" : {
		"find" : "/api/rest/package",
		"replace" : "http://data.opendataday.it/resource/dati.provinciaRoma"
	},
	"datasetInfo" : [ "<http://data.opendataday.it/resource/dati.provinciaRoma>\t<http://www.w3.org/ns/dcat#dataset>\t<{{URI}}>" ,  "<{{URI}}>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/ns/dcat#Dataset>"],
	"datasetMap" : {
		"title" : {
			"uri" : "<http://purl.org/dc/elements/1.1/title>",
			"type" : "string"
		},  
		"notes" : {
			"uri" : "<http://purl.org/dc/terms/description>",
			"type" : "string" 
		},
		"ckan_url" : {
			"uri" : "<http://purl.org/dc/terms/isReferencedBy>",
			"type" : "uri"
		},
		"license_id" : {
			"uri" : "<http://purl.org/dc/terms/rights>",
			"type" : "string" 
		},
		"tags" : {
			"uri" : "<http://www.w3.org/ns/dcat#keyword>",
			"type" : "map",	 
			"hasOwnUri" : true,
			"valueAsUri" : true,
			"prefix" : "http://data.opendataday.it/resource/tag/",
			"forceLowerCase" : true,
			"staticInfo" : [ "<{{URI}}>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/2004/02/skos/core#Concept>" ],
			"toUri":true
		},
		"resources" : {
			"type" : "map",
			"hasOwnUri":true,
			"staticInfo" : [ "<{{URI}}>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/ns/dcat#Distribution>" ],
			"suffix" : "/distribution/dis",
			"uri" : "<http://www.w3.org/ns/dcat#distribution>",
			"url" : {
				"uri" : "<http://www.w3.org/ns/dcat#accessURL>",
				"type" : "uri" 
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