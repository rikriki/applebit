'use strict';
var moment = require('moment')
module.exports = function($scope,Post,$log,$rootScope) {
  // var source = new Post(
  // {
  //   source: "www.google2.com",
  //   exclude: false,
  //   active: true,
  //   adgroup: 400000
  // });
  // source.module_name= "adgroups_sources",

  // source.$save();


  //Update title
  $rootScope.$emit('updateTitle',{title:"Create"})
  
  Post.charge(function(data){
    
      $scope.gospels = data.data;
  })
  $scope.model={};





    
  $scope.save = function(e){
  	
    $log.debug($scope)
    // debugger;
  

    // $scope.gospel['reg_date'] = moment($scope.gospel.reg_date).format('YYYY-MM-DD HH:mm:ss');
    // //$scope.gospel['reg_date'] = moment().format('YYYY-MM-DD HH:mm:ss');
    // var gospel = new Post($scope.gospel)
    // gospel.$save();
    // console.log('save')
  }
  $scope.reset =function(){

  }
};

  

//   $scope.add = function(){
//   var f = document.getElementById('file').files[0],
//       r = new FileReader();
//   r.onloadend = function(e){
//     var data = e.target.result;
//     //send your binary data via $http or $resource or do anything else with it
//   }
//   r.readAsBinaryString(f);
// }