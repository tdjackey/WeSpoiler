'use strict';

/**
 * @ngdoc overview
 * @name wespoilerApp
 * @description
 * # wespoilerApp
 *
 * Main module of the application.
 */
angular
  .module('wespoilerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngSocial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .when('/spolier/:id', {
        templateUrl: 'views/spolier.html',
        controller: 'SpolierCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

AV.initialize('089osslehknddd3g5di43kg21zr3mzkckt1wq7dv53psh7is', '4sfw4bh5juusg843kb1r50pyl4gy4pni1v3mf1n0yhvnb72t');
