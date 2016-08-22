'use strict';

module.exports = function() {

  var todos =  [{
          link: '',
          title: 'home',
          icon: 'dashboard'
      }, {
          link: '',
          title: 'create',
          icon: 'group'
      }, {
          link: '',
          title: 'gospels',
          icon: 'message'
      }, {
          link: '',
          title: 'profile',
          icon: 'person'
      }];


  this.getMenus = function() {
    return todos;
  };
};
