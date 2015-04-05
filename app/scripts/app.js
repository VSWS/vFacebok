'use strict';

/**
 * @ngdoc overview
 * @name ifacebookApp
 * @description
 * # ifacebookApp
 *
 * Main module of the application.
 */
angular
    .module('ifacebookApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        // Setup State
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html'
            })
            .state('test', {
                url: '/test',
                templateUrl: 'views/test.html',
                controller: 'TestCtrl'
            })
    });
