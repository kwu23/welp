'use strict';
const angular = require('angular');
import PasswordController from './password.controller';

export default angular.module('welpApp.password', [])
  .controller('PasswordController', PasswordController)
  .name;
