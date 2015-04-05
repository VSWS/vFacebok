'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:FanpageCtrl
 * @description
 * # FanpageCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
  .controller('FanPageCtrl', function ($scope, $rootScope) {
      $rootScope.titleHeader = "FanPage";
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
