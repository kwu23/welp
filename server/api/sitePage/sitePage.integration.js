'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newSitePage;

describe('SitePage API:', function() {
  describe('GET /api/sitePages', function() {
    var sitePages;

    beforeEach(function(done) {
      request(app)
        .get('/api/sitePages')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          sitePages = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(sitePages).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/sitePages', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/sitePages')
        .send({
          name: 'New SitePage',
          info: 'This is the brand new sitePage!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSitePage = res.body;
          done();
        });
    });

    it('should respond with the newly created sitePage', function() {
      expect(newSitePage.name).to.equal('New SitePage');
      expect(newSitePage.info).to.equal('This is the brand new sitePage!!!');
    });
  });

  describe('GET /api/sitePages/:id', function() {
    var sitePage;

    beforeEach(function(done) {
      request(app)
        .get(`/api/sitePages/${newSitePage._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          sitePage = res.body;
          done();
        });
    });

    afterEach(function() {
      sitePage = {};
    });

    it('should respond with the requested sitePage', function() {
      expect(sitePage.name).to.equal('New SitePage');
      expect(sitePage.info).to.equal('This is the brand new sitePage!!!');
    });
  });

  describe('PUT /api/sitePages/:id', function() {
    var updatedSitePage;

    beforeEach(function(done) {
      request(app)
        .put(`/api/sitePages/${newSitePage._id}`)
        .send({
          name: 'Updated SitePage',
          info: 'This is the updated sitePage!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSitePage = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSitePage = {};
    });

    it('should respond with the updated sitePage', function() {
      expect(updatedSitePage.name).to.equal('Updated SitePage');
      expect(updatedSitePage.info).to.equal('This is the updated sitePage!!!');
    });

    it('should respond with the updated sitePage on a subsequent GET', function(done) {
      request(app)
        .get(`/api/sitePages/${newSitePage._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let sitePage = res.body;

          expect(sitePage.name).to.equal('Updated SitePage');
          expect(sitePage.info).to.equal('This is the updated sitePage!!!');

          done();
        });
    });
  });

  describe('PATCH /api/sitePages/:id', function() {
    var patchedSitePage;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/sitePages/${newSitePage._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched SitePage' },
          { op: 'replace', path: '/info', value: 'This is the patched sitePage!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSitePage = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSitePage = {};
    });

    it('should respond with the patched sitePage', function() {
      expect(patchedSitePage.name).to.equal('Patched SitePage');
      expect(patchedSitePage.info).to.equal('This is the patched sitePage!!!');
    });
  });

  describe('DELETE /api/sitePages/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/sitePages/${newSitePage._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when sitePage does not exist', function(done) {
      request(app)
        .delete(`/api/sitePages/${newSitePage._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
