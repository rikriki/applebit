'use strict';
var _ = require('lodash')
module.exports = function($scope, TodoService,Post, $timeout, $mdSidenav, $log,$rootScope,ProfileService,ProfileFactory) {
  

  ProfileFactory.get(function(data){
     
      
      $scope.basicInfo = _.mapValues(_.pick(data.data[0],['email','phone','website']),function(v,k){
             return { icon:k,val:v}
            })
      
      
  })

  // $scope.profile = ProfileService.getProfile();
  // $scope.basicInfo = ProfileService.basicInfo();
  $rootScope.$emit('updateTitle',{title:"Applebit 1.0"})


};

  