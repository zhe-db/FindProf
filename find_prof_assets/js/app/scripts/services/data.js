'use strict';

var angular = require('angular');


// file for data transfering for findprof

angular.module('faceListApp').service('getFaceListService',function($http, $q){

  // get face list service
    this.getFace = function(callback){
        $http.get('/api/professors').then(callback);
    };
  // edit profile service

  // save profile service

  //delete profile service 

});
