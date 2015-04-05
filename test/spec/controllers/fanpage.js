'use strict';

describe('Controller: FanpageCtrl', function () {

  // load the controller's module
  beforeEach(module('ifacebookApp'));

  var FanpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FanpageCtrl = $controller('FanpageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
