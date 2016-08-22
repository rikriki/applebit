'use strict';

module.exports = function($scope,$compile) {
var jq = require('jquery')
debugger;  
  var html = '<div>Test Ctrl</div>';
  $scope.el = $compile(html)($scope);

};

  