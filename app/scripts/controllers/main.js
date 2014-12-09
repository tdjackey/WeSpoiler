'use strict';

/**
 * @ngdoc function
 * @name weSpoilerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weSpoilerApp
 */
angular.module('weSpoilerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
