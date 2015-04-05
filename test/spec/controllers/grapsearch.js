'use strict';

describe('Controller: GrapsearchCtrl', function () {

  // load the controller's module
  beforeEach(module('ifacebookApp'));

  var GrapsearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GrapsearchCtrl = $controller('GrapsearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
