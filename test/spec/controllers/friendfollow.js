'use strict';

describe('Controller: FriendfollowCtrl', function () {

  // load the controller's module
  beforeEach(module('ifacebookApp'));

  var FriendfollowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FriendfollowCtrl = $controller('FriendfollowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
