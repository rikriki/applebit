'use strict';

module.exports = function($scope, TodoService,Post, $timeout, $mdSidenav, $log,$rootScope,$routeParams,$location,MenuService) {
  
  
  if(!$scope.title)
    $scope.title="Applebit 1.02";

  $rootScope.$on("updateTitle", function(e,data) {
     $scope.title = data.title;
  });
  $scope.todo = TodoService.getTodos()[0];
  $scope.todos = TodoService.getTodos();
  var source = new Post(
  {
    source: "www.google2.com",
    exclude: false,
    active: true,
    adgroup: 400000
  });
  source.module_name= "adgroups_sources",

  //source.$save();
  // Post.charge(function(data){
    
  //     $scope.gospels = data.data;
  // })




  $scope.toggleLeft = buildDelayedToggler('left')
  


  function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
  }

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

  $scope.save = function(e){
    debugger;
    TodoService.insert({
        title: 'Riki',
        due: TodoService.createNew(0, 0, 0, 18, 0),
        text: 'We are out of milk and coffee without milk is just unbearable.',
    })
   console.log('save')
  

  }

};

  