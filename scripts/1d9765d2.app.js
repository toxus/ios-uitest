/*jshint unused: vars */
define(['angular', 'controllers/main']/*deps*/, function (angular, MainCtrl)/*invoke*/ {
  'use strict';

  return angular.module('uitestApp', ['uitestApp.controllers.MainCtrl',
/*angJSDeps*/
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    })
    .run(function($rootScope) {
      $rootScope.showNav = true;
      $rootScope.keyboardShown = function(isActive) {
        // only do this in iOS or safari
        $rootScope.showNav = ! isActive;
      };
    })
    ;
});
