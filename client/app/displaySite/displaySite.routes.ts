'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('displaySite', {
      url: '/displaySite/:_id',
      template: '<display-site></display-site>',
      params: {siteObject: null}
    });
}
