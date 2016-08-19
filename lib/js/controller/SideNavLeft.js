'use strict';

module.exports = function($scope, $timeout, $mdSidenav, $log,$routeParams,$location) {
   $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };

    $scope.changeNav = function(e) {
    	$mdSidenav('left').close().then(function(){
    		$location.path(e);
    	})
        
    }

};

  