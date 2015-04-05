'use strict';

describe('Service: CampaignFactory', function () {

  // load the service's module
  beforeEach(module('ifacebookApp'));

  // instantiate service
  var CampaignFactory;
  beforeEach(inject(function (_CampaignFactory_) {
    CampaignFactory = _CampaignFactory_;
  }));

  it('should do something', function () {
    expect(!!CampaignFactory).toBe(true);
  });

});
