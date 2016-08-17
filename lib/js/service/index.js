'use strict';

var app = require('angular').module('todoApp');

app.service('TodoService', require('./todos'));


app.factory("Post", require('./api'));



