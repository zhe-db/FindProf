'use strict';

var angular = require('angular');

angular.module('faceListApp').service("getFaceListService", require('./data'));
angular.module('faceListApp').service("searchService", require('./search'));
// file for module including services here
