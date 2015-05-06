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
.directive('resolveLoader', resolveLoader);