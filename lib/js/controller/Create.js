'use strict';
var _ = require('lodash')
var moment = require('moment')
module.exports = function($scope,Post,$log,$rootScope,$routeParams,ProfileFactory) {
  
  $rootScope.$emit('updateTitle',{title:"Create"})
    
  ProfileFactory.get({ id: $routeParams.id }, function(data) {
      $scope.basicInfo = _.mapValues(_.pick(data.message[0], ['email', 'phone', 'website']), function(v, k) {
          return { icon: k, val: v }
      })
  });
     
      


    
  $scope.save = function(e){
    $log.debug($scope)
  }
  $scope.reset =function(){

  }
};

  
