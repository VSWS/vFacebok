'use strict';

describe('Service: fbSDK', function () {

  // load the service's module
  beforeEach(module('ifacebookApp'));

  // instantiate service
  var fbSDK;
  beforeEach(inject(function (_fbSDK_) {
    fbSDK = _fbSDK_;
  }));

  it('should do something', function () {
    expect(!!fbSDK).toBe(true);
  });

});
