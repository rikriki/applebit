'use strict';

module.exports = function($scope, TodoService,Post, $timeout, $mdSidenav, $log,$rootScope,ProfileService) {
  
  $scope.profile = ProfileService.getProfile();
  $scope.basicInfo = ProfileService.basicInfo();
  $rootScope.$emit('updateTitle',{title:"Applebit 1.0"})


};

  