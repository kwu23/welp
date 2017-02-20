'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');

import routes from './sitePages.routes';

export class SitePagesComponent {
  $http;
  $state;

  sitePages = [];

  /*@ngInject*/
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
  }

  $onInit() {
    this.$http.get('/api/sitePages').then(response => {
      this.sitePages = response.data;
    });
  }

  searchForURL(searchTerm: HTMLInputElement): void {
    this.$http.post('/api/sitePages/' + searchTerm).then(response => {
      this.sitePages = response.data;
    });
  }
}

export default angular.module('welpApp.sitePages', [uiRouter])
  .config(routes)
  .component('sitePages', {
    template: require('./sitePages.html'),
    controller: SitePagesComponent,
    controllerAs: 'sitePagesCtrl'
  })
  .name;
