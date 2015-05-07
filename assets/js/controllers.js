// controller



function mainCtrl($scope){

	$scope.moment = moment;

}


function jobCtrl($scope,$rootScope,$api,$log, $stateParams){
	

	  $scope.load = function(id){

	  	   var id = $stateParams.id || id;


	  		$api
	  		.job(id || null)
	  		.get()
	  		.success(function(rs){
	  			 $scope.values = rs;

	  		     if(indev())	  	  		  			 
	  			 console.log(rs);



	  			if(rs.JobTitle)
	  				$rootScope.JobTitle = rs.JobTitle;
	  		})
	  		.error(function(err){	  			
	  			
	  			if(indev())
	  			$log.error(err);

	  			$scope.values = [];
	  		})
	  		;

	  }


	  $scope.apply_job = function(){


	  	  $scope.apply.jobTitle = $rootScope.JobTitle;

	  	  $api
	  	  .apply()
	  	  .post($scope.apply)
	  	  .success(function(rs){
	  		  if(indev())	  	  		  	  	  
	  	  	  console.log(rs);

	  	  	 $scope.sent = true;
	  	  })
	  	  .error(function(err){
	  		  if(indev())	  	  	
	  	  	  $log.error(err);
	  	  })

	  }

}


angular.module('cti')
.controller('mainCtrl', mainCtrl)
.controller('jobCtrl', jobCtrl)
;