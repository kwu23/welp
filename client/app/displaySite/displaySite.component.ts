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
    console.log($stateParams);
  }

  $onInit() {
    this.siteObj = this.$stateParams.siteObject;

    if (this.siteObj == null && this.$stateParams._id) {
      this.$http.get('/api/sitePages/' + this.$stateParams._id).then(response => {
        this.siteObj = response.data;
      });
    }
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
