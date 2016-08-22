'use strict';

var app = require('angular').module('todoApp');

app.service('TodoService', require('./todos'));
app.service('MenuService', require('./menus'));
app.service('ProfileService', require('./profile'));


app.factory("Post", require('./api'));
app.factory("ProfileFactory", require('./profileFactory'));



