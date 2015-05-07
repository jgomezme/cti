//service


function apiFactory($http){
		
		  this.baseUrl = window.config.baseUrl + window.config.apiPath;		  
		  this.url = '';

		  //endpoints
		  this.job = function(id){ if(!id) this.url = this.baseUrl + "/job"; else this.url = this.baseUrl + '/job/' + id; return this;  }
		  this.apply = function(){  this.url = this.baseUrl + "/apply"; return this;  }		  
		  
		  //reset url
		  this.reset = function(){ this.url = ''; return this; }
		  
		  //methods
		  this.get = function(){ var url = this.url; this.reset(); return $http.get(url); }
		  this.post = function(data, header){ var url = this.url; this.reset(); return $http.post(url, data || {}, header || {}); } 

		  return this;
}

angular.module('cti')
.factory('$api', apiFactory)
;