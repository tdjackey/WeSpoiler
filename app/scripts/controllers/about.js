'use strict';

/**
 * @ngdoc function
 * @name wespoilerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wespoilerApp
 */
angular.module('wespoilerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
