'use strict';

describe('Component: DisplaySiteComponent', function() {
  // load the controller's module
  beforeEach(module('welpApp.displaySite'));

  var DisplaySiteComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    DisplaySiteComponent = $componentController('displaySite', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
