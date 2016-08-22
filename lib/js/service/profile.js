'use strict';
var _ = require('lodash')
module.exports = function() {
  var profile={
    "basics": {
      "name": "John Doe",
      "label": "Programmer",
      "picture": "",
      "email": "john@gmail.com",
      "phone": "(912) 555-4321",
      "website": "http://johndoe.com",
      "summary": "A summary of John Doe...",
      "location": {
        "address": "2712 Broadway St",
        "postalCode": "CA 94115",
        "city": "San Francisco",
        "countryCode": "US",
        "region": "California"
      }
    }
  }
  this.basicInfo = function(){
    var basicinfo =_.mapValues(_.pick(profile.basics,['email','phone','website']),function(v,k){
             return { icon:k,val:v}
            })
    console.log(basicinfo)
    return  basicinfo;
  }

  this.getProfile = function() {
    return profile;
  };
};