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
	  			 console.log(rs);
	  		})
	  		.error(function(err){	  			
	  			$log.warn(err);
	  			$scope.values = [];
	  		})
	  		;

	  }

}


angular.module('cti')
.controller('mainCtrl', mainCtrl)
.controller('jobCtrl', jobCtrl)
;