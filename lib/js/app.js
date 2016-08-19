'use strict'
var _ = require('lodash');
//window.$ = window.jQuery = require('jquery');
require('jquery');

var angular = require('angular');
require('angular-route');
require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-resource');

require('angular-material');

var app = angular.module('todoApp',['ngRoute','ngMaterial','ngResource']);

require('./service');
require('./controller');

app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'lib/js/views/home.html',
		controller:'HomeCtrl'
	}).when('/layout',{
		templateUrl:'lib/js/views/layout.html',
		controller:'TodoCtrl'
	})
	.when('/gospels',{
		templateUrl:'lib/js/views/gospel.html',
		controller:'EditGospelCtrl'
	})
	.when('/create',{
		templateUrl:'lib/js/views/create.html',
		controller:'CreateCtrl'
	})
	.otherwise({
		redirectTo:'/'
	})
})

