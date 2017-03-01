'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routing from './account.routes';
import login from './login';
import password from './settings/password';
import settings from './settings';
import signup from './signup';
import editSettings from './settings/edit';


export default angular.module('welpApp.account', [

    uiRouter,
    login,
    settings,
    password,
    signup,
    editSettings
])
    .config(routing)

    .run(function($rootScope) {
      'ngInject';
      $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
        if (next.name === 'logout' && current && current.name && !current.authenticate) {
          next.referrer = current.name;
        }
      });
    })
    .name;
