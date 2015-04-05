'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:FriendCtrl
 * @description
 * # FriendCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
  .controller('FriendCtrl', function ($scope, $rootScope) {
      $rootScope.titleHeader = "Friend";
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
