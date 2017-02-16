'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('sitePages', {
      url: '/websites',
      template: '<site-pages></site-pages>'
    });
}
