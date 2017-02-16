'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './sitePages.routes';

export class SitePagesComponent {
  /*@ngInject*/
  constructor() {
    // this.message = 'Hello';
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
