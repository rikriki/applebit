'use strict';

var app = require('angular').module('todoApp');
app.controller('TodoCtrl', require('./todo'));
app.controller('TodoListCtrl', require('./todolist'));
app.controller('EditTodoCtrl', require('./edittodo'));
app.controller('EditGospelCtrl', require('./editgospel'));
app.directive('fileReader', require('./fileread'));


