define(['angular'], function (angular) {
  'use strict';

  angular.module('uitestApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.footHidden = false;

      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
