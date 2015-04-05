'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
  .controller('SettingsCtrl', function ($scope, $rootScope) {
      $rootScope.titleHeader = "Settings";

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
