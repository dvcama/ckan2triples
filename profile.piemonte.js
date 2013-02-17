{

	"catalogInfo" : [ "<http://data.opendataday.it/resource/dati.piemonte>\t<http://purl.org/dc/elements/1.1/title>\t\"Catalogo OpenData della Regione Piemonte\"","<http://data.opendataday.it/resource/dati.piemonte>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/ns/dcat#Catalog>" ],
	"packageListUrl" : "http://www.dati.piemonte.it/rpapisrv/api/rest/package",
	"singlePackageBaseUrl" : "http://www.dati.piemonte.it/rpapisrv/api/rest/package/",
	"resultFileName" : "dati.piemonte.n3",
	"resourceUriSubstitutor" : {
		"find" : "/rpapisrv/api/rest/package",
		"replace" : "http://data.opendataday.it/resource/dati.piemonte"
	},
	"staticInfo" : [ "<http://data.opendataday.it/resource/dati.piemonte>\t<http://www.w3.org/ns/dcat#dataset>\t<{{URI}}>",  "<{{URI}}>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/ns/dcat#Dataset>"],
	"datasetMap" : {
		"title" : {
			"uri" : "<http://purl.org/dc/elements/1.1/title>",
			"type" : "string"
		},
		"notes" : {
			"uri" : "<http://purl.org/dc/terms/description>",
			"type" : "string"
		},
		"url" : {
			"uri" : "<http://xmlns.com/foaf/0.1/homepage>",
			"type" : "uri"
		},
		"tags" : {
			"uri" : "<http://www.w3.org/ns/dcat#keyword>",
			"type" : "map",	 
			"hasOwnUri" : true,
			"valueAsUri" : true,
			"prefix" : "http://data.opendataday.it/resource/tag/",
			"forceLowerCase" : true,
			"staticInfo" : ["<{{URI}}>\t<http://purl.org/dc/elements/1.1/creator>\t<http://data.opendataday.it/resource/dati.piemonte>", "<{{URI}}>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/2004/02/skos/core#Concept>" , "<{{URI}}>\t<http://purl.org/dc/elements/1.1/title>\t\"{{VALUE}}\"" ],
			"toUri":true
		},		
		"extras" : {
			"type" : "map",
			"license_id" : {
				"uri" : "<http://purl.org/dc/terms/license>",
				"type" : "uri",
				"resourceUriSubstitutor" : [{
					"find" : "CC-BY",
					"replace" :  "http://www.opendefinition.org/licenses/cc-zero"
				},{
					"find" : "CC0",
					"replace" :  "http://opendefinition.org/licenses/cc-by/"
				}]
			},
			"metadata_modified" : {
				"uri" : "<http://purl.org/dc/terms/modified>",
				"type" : "string"
			},
			"metadata_created" : {
				"uri" : "<http://purl.org/dc/terms/created>",
				"type" : "string"
			},
			"author" : {
				"uri" : "<http://purl.org/dc/terms/publisher>",
				"type" : "string"
			},
			"topic" : {
				"uri" : "<http://www.w3.org/ns/dcat#theme>",
				"type" : "map",	 
				"hasOwnUri" : true,
				"valueAsUri" : true,
				"prefix" : "http://data.opendataday.it/resource/tag/",
				"forceLowerCase" : true,
				"staticInfo" : ["<{{URI}}>\t<http://purl.org/dc/elements/1.1/creator>\t<http://data.opendataday.it/resource/dati.piemonte>","<{{URI}}>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/2004/02/skos/core#Concept>" , "<{{URI}}>\t<http://purl.org/dc/elements/1.1/title>\t\"{{VALUE}}\"" ],				"toUri":true
			}
		},
		"resources" : {
			"type" : "map",
			"hasOwnUri" : true,
			"staticInfo" : [ "<{{URI}}>\t<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>\t<http://www.w3.org/ns/dcat#Distribution>" ],
			"suffix" : "/distribution/dis",
			"uri" : "<http://www.w3.org/ns/dcat#distribution>",
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