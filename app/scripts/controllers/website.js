'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:WebsiteCtrl
 * @description
 * # WebsiteCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
  .controller('WebsiteCtrl', function ($scope, $rootScope) {
      $rootScope.titleHeader = "Website";
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
