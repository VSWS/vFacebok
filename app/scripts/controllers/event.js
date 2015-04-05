'use strict';

/**
 * @ngdoc function
 * @name ifacebookApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the ifacebookApp
 */
angular.module('ifacebookApp')
    .controller('EventCtrl', function ($scope, $rootScope) {
        $rootScope.titleHeader = "Event";
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
