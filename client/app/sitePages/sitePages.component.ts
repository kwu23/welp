'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');

import routes from './sitePages.routes';

export class SitePagesComponent {
  $http;
  $state;

  sitePages = [];
  message = '';

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

      if (response.data.length > 0) {
        this.message = '';
      } else {
        this.message = 'The website you entered currently has no reviews. Be the first!';
      }
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
