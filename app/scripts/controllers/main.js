'use strict';

/**
 * @ngdoc function
 * @name wespoilerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wespoilerApp
 */
var app = angular.module('wespoilerApp');

app.controller('MainCtrl', function ($scope, AllService) {

  $scope.refresh = function(){
    AllService.getMovies(function(movies){
      $scope.months = movies;
      $scope.$apply();
    });
  };
  $scope.refresh();
});

app.controller('MovieCtrl', function ($scope, $routeParams, AllService) {
  $scope.id = $routeParams.id;
  $scope.refresh = function(){
    AllService.getMovie($routeParams.id,function(movie){
      $scope.movie = movie;
      $scope.$apply();

    });
    AllService.getSpolierByMovie($routeParams.id, function(spoliers){
      $scope.spoliers = spoliers;
      $scope.$apply();
    });

  };
  $scope.refresh();
  $scope.newSpolier = function(){
    AllService.newSpolier($scope.id, $scope.spolierContent, function(){
      $scope.refresh();
      $scope.spolierContent = '';
    });
  };

});

app.controller('SpolierCtrl', function ($scope, $routeParams, AllService) {
  $scope.id = $routeParams.id;
  $scope.disabled = false;
  $scope.refresh = function(){
    AllService.getSpolier($scope.id,function(spolier){
      $scope.spolier = spolier;
      $scope.$apply();
    });
  };
  $scope.hate = function(){
    AllService.hateSpolier($scope.id,function(){
      $scope.spolier.hates += 1;
      $scope.disabled = true;
      $scope.$apply();
    });
  };
  $scope.refresh();
});
