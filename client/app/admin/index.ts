'use strict';
const angular = require('angular');
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('welpApp.admin', [
  'welpApp.auth',
  'ui.router'
])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
