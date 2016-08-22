'use strict';

var app = require('angular').module('todoApp');
app.controller('TodoCtrl', require('./todo'));
app.controller('TodoListCtrl', require('./todolist'));
app.controller('EditTodoCtrl', require('./edittodo'));
app.controller('EditGospelCtrl', require('./editgospel'));

app.controller('AppCtrl', require('./app'));
app.controller('CreateCtrl', require('./Create'));
app.controller('HomeCtrl', require('./home'));
app.controller('SideNavLeftCtrl', require('./SideNavLeft'));
app.controller('TestCtrl', require('./testctrl'));
app.directive('homeContainer', require('./homecontainer'));
app.directive('fileReader', require('./fileread'));


