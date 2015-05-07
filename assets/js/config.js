// config

//init angular module app

angular.module('cti',['ui.router','ngMdIcons']);


//init config file


var config = {
	  env : "dev",  //change to enviroment where app it's running
	  dev : {
	  	   baseUrl : "http://joblisting.azurewebsites.net",
	  	   apiPath : "/api"
	  },
	  qa : {
	  	   baseUrl : "http://joblisting.azurewebsites.net",
	  	   apiPath : "/api"
	  },
	  prod : {
	  	   baseUrl : "http://joblisting.azurewebsites.net",
	  	   apiPath : "/api"
	  }
}

//init confing global var
window.env = config.env;
window.config = config[config.env];
window.indev = function(){		
	  return /dev/g.test(window.env);
}