'use strict';

module.exports = function($scope, TodoService) {
  $scope.editMode = true;	
  $scope.todo = TodoService.getTodos()[0];
  $scope.todos = TodoService.getTodos();

  $scope.save = function(e){
  	$scope.$parent
  	debugger;

  	console.log($scope.$parent.todo  || $scope.$parent )
  	TodoService.insert({
	    title: 'Riki',
	    due: TodoService.createNew(0, 0, 0, 18, 0),
	    text: 'We are out of milk and coffee without milk is just unbearable.',
	})
	console.log('save')

  }
};

  