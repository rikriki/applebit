'use strict';

module.exports = function($resource) {

 return $resource("http://localhost:3001/api/gospels",{},{
  charge:{method:'GET'},
  // save:{method:'POST'},
 });
};




// {
// id: 39,
// source: "www.google.com",
// exclude: false,
// active: true,
// module_name: "adgroups_sources",
// adgroup: 419949
// },




// app.factory("Post", function($resource) {
//   return $resource("/api/posts/:id", {}, {
//     query: { method: "GET", isArray: false }
//   });
// });