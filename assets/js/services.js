//service


function apiFactory($http){
		
		  this.baseUrl = window.config.baseUrl + window.config.apiPath;		  
		  this.url = '';

		  this.job = function(id){ if(!id) this.url = this.baseUrl + "/job"; else this.url = this.baseUrl + '/job/' + id; return this;  }
		  this.reset = function(){ this.url = ''; return this; }
		  this.get = function(){ var url = this.url; this.reset(); return $http.get(url); }

		  return this;
}

angular.module('cti')
.factory('$api', apiFactory)
;