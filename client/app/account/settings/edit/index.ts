'use strict';
const angular = require('angular');
import EditSettingsController from './editSettings.controller';

export default angular.module('welpApp.editSettings', [])
  .controller('EditSettingsController', EditSettingsController)
  .name;
