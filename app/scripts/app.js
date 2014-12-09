'use strict';

/**
 * @ngdoc overview
<<<<<<< HEAD
 * @name weSpoilerApp
 * @description
 * # weSpoilerApp
=======
 * @name wespoilerApp
 * @description
 * # wespoilerApp
>>>>>>> 78d319e1852c725b2747ac1467554c391cf9b772
 *
 * Main module of the application.
 */
angular
<<<<<<< HEAD
  .module('weSpoilerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
=======
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
>>>>>>> 78d319e1852c725b2747ac1467554c391cf9b772
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
<<<<<<< HEAD
=======
      .when('/movie/:id', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .when('/spolier/:id', {
        templateUrl: 'views/spolier.html',
        controller: 'SpolierCtrl'
      })
>>>>>>> 78d319e1852c725b2747ac1467554c391cf9b772
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
<<<<<<< HEAD
=======

AV.initialize('089osslehknddd3g5di43kg21zr3mzkckt1wq7dv53psh7is', '4sfw4bh5juusg843kb1r50pyl4gy4pni1v3mf1n0yhvnb72t');
>>>>>>> 78d319e1852c725b2747ac1467554c391cf9b772
