// controller



function mainCtrl($scope){

	$scope.moment = moment;

}


function jobCtrl($scope,$api,$log, $stateParams){
	

	  $scope.load = function(id){

	  	   var id = $stateParams.id || id;

	  		$api
	  		.job(id || null)
	  		.get()
	  		.success(function(rs){
	  			 $scope.values = rs;

	  		     if(indev())	  	  		  			 
	  			 console.log(rs);
	  		})
	  		.error(function(err){	  			
	  			
	  			if(indev())
	  			$log.error(err);

	  			$scope.values = [];
	  		})
	  		;

	  }


	  $scope.apply_job = function(){
	  	

	  	  $api
	  	  .apply()
	  	  .post($scope.form)
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