'use strict';

describe('Component: SitePagesComponent', function() {
  // load the controller's module
  beforeEach(module('welpApp.sitePages'));

  var SitePagesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    SitePagesComponent = $componentController('sitePages', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
