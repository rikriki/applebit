'use strict';

module.exports = function($scope, TodoService,Post) {
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

  