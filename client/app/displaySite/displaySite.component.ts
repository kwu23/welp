'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './displaySite.routes';

export class DisplaySiteComponent {
  $http;
  $state;
  $stateParams;

  siteObj = null;
  revs = [];

  /*@ngInject*/
  constructor($http, $state, $stateParams) {
    this.$http = $http;
    this.$state = $state;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.siteObj = this.$stateParams.siteObject;
    if (this.siteObj == null && this.$stateParams._id) {
      this.$http.get('/api/sitePages/' + this.$stateParams._id).then(response => {
        this.siteObj = response.data;
        console.log(this.siteObj);
        var review = {
          "thisIsFillerModel" : "test",
          "descript" : "test2",
          "rate" : "test3",
          "helpful" : "test4",
          "unhelpful" : "test5",
          "owner" : "test7"
        };
        this.siteObj.reviews.unshift(review);
        console.log(this.siteObj)
      });
    }


    this.$http.put('/api/sitePages/' + this.$stateParams._id, this.siteObj).then(response => {
      console.log(response);
    });

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
