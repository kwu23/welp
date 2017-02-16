'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var sitePageCtrlStub = {
  index: 'sitePageCtrl.index',
  show: 'sitePageCtrl.show',
  create: 'sitePageCtrl.create',
  upsert: 'sitePageCtrl.upsert',
  patch: 'sitePageCtrl.patch',
  destroy: 'sitePageCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var sitePageIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './sitePage.controller': sitePageCtrlStub
});

describe('SitePage API Router:', function() {
  it('should return an express router instance', function() {
    expect(sitePageIndex).to.equal(routerStub);
  });

  describe('GET /api/sitePages', function() {
    it('should route to sitePage.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'sitePageCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/sitePages/:id', function() {
    it('should route to sitePage.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'sitePageCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/sitePages', function() {
    it('should route to sitePage.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'sitePageCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/sitePages/:id', function() {
    it('should route to sitePage.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'sitePageCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/sitePages/:id', function() {
    it('should route to sitePage.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'sitePageCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/sitePages/:id', function() {
    it('should route to sitePage.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'sitePageCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
