'use strict';

/**
 * @ngdoc function
 * @name weSpoilerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weSpoilerApp
 */
angular.module('weSpoilerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
