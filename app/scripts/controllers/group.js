'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:GroupCtrl
 * @description
 * # GroupCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
  .controller('GroupCtrl', function ($scope, $rootScope) {
      $rootScope.titleHeader = "Graph Search";
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
