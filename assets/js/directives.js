 function resolveLoader($rootScope, $timeout) {

  return {
    restrict: 'E',
    replace: true,
    template: '<div class="alert alert-success ng-hide">loading, please hold.</div>',
    link: function(scope, element) {



      $rootScope.$on('$locationChangeStart', function(event, currentRoute, previousRoute) {        
        window.scrollTo(0,0);       //scroll view to top 
        if (previousRoute) return;        
        element.removeClass('ng-hide');



        $timeout(function() {
          element.removeClass('ng-hide');
        });
      });

      $rootScope.$on('$locationChangeSuccess', function() {
        window.scrollTo(0,0);        //scroll view to top
        element.addClass('ng-hide');
      });
    }
  };

};


angular.module('cti')
.directive('resolveLoader', resolveLoader)
.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
;