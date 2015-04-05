'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:FriendfollowCtrl
 * @description
 * # FriendfollowCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
  .controller('FriendFollowCtrl', function ($scope, $rootScope) {
      $rootScope.titleHeader = "Friend Follow";
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
