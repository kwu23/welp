'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './displaySite.routes';

export class DisplaySiteComponent {
  $http;
  $state;
  $stateParams;

  siteObj = null;

  /*@ngInject*/
  constructor($http, $state, $stateParams) {
    this.$http = $http;
    this.$state = $state;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.siteObj = this.$stateParams.siteObject;
  }
}

export default angular.module('welpApp.displaySite', [uiRouter])
  .config(routes)
  .component('displaySite', {
    template: require('./displaySite.html'),
    controller: DisplaySiteComponent,
    controllerAs: 'displaySiteCtrl'
  })
  .name;
