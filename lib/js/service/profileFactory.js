'use strict';

module.exports = function($resource) {
  return $resource("http://localhost:3001/api/profile/:id");
};

