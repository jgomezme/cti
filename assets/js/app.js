//app config

angular.module('cti')
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
    .state('jobs', {
      url: "/jobs",
      templateUrl: "views/jobs.html",
      controller : jobCtrl
    }) 
    .state('job-detail', {
      url: "/job-detail/:id",
      templateUrl: "views/job-details.html",
      controller : jobCtrl
    }) 
    ;
     
 	 
 	$urlRouterProvider.otherwise("/jobs");
})
.run(function($rootScope){
	 $rootScope.nothing = "Not Defined"
})
;