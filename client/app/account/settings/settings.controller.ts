'use strict';
// @flow
interface Change {
  newName: string;
  newEmail: string;
}

export default class SettingsController {
	user: Object;
	change : Change = {
		newName : '',
		newEmail : ''
	};
	errors = {other: undefined};
	submitted = false;
	Auth;
  	$state;

	/*@ngInject*/
	constructor(Auth, $state) {
		this.Auth = Auth;
		this.user = Auth.getCurrentUserSync();
		this.$state = $state;
	}

	changeName(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changeName(this.change.newName)
      .then(() => {
        this.$state.go('settings');
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }
}
