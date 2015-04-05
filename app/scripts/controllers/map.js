'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
  .controller('MapCtrl', function ($scope, $rootScope) {
      $rootScope.titleHeader = "Map";
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
