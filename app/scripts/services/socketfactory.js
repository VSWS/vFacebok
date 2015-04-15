'use strict';

/**
 * @ngdoc service
 * @name ifacebookApp.socketFactory
 * @description
 * # socketFactory
 * Factory in the ifacebookApp.
 */
angular.module('ifacebookApp')
  .factory('socketFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
