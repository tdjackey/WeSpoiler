'use strict';

/**
 * @ngdoc function
<<<<<<< HEAD
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
=======
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
  $scope.hate = function(id){
    AllService.hateSpolier(id, function(){
      for(var i = 0; i < $scope.spoliers.length; i += 1){
        if($scope.spoliers[i].id === id) {
          $scope.spoliers[i].hates += 1;
        }
      }
      $scope.$apply();
    });
  };

});

app.controller('SpolierCtrl', function ($scope, $routeParams, AllService) {
  $scope.id = $routeParams.id;
  $scope.disabled = false;
  $scope.refresh = function(){
    AllService.getSpolier($scope.id,function(spolier){
      $scope.spolier = spolier;
      AllService.getMovie(spolier.movie,function(movie){
        $scope.movie = movie;
        console.log(movie);
        $scope.apply();
      });
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
>>>>>>> 78d319e1852c725b2747ac1467554c391cf9b772
