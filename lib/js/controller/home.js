'use strict';

module.exports = function($scope, TodoService,Post, $timeout, $mdSidenav, $log) {
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

  source.$save();
  Post.charge(function(data){
    
      $scope.gospels = data.data;
  })


// // We can retrieve a collection from the server
// var cards = CreditCard.query(function() {
//   // GET: /user/123/card
//   // server returns: [ {id:456, number:'1234', name:'Smith'} ];

//   var card = cards[0];
//   // each item is an instance of CreditCard
//   expect(card instanceof CreditCard).toEqual(true);
//   card.name = "J. Smith";
//   // non GET methods are mapped onto the instances
//   card.$save();
//   // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
//   // server returns: {id:456, number:'1234', name: 'J. Smith'};

//   // our custom method is mapped as well.
//   card.$charge({amount:9.99});
//   // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
// });

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

  