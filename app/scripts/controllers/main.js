'use strict';

/**
 * @ngdoc function
 * @name wespoilerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wespoilerApp
 */
angular.module('wespoilerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
