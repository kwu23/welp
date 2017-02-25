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
	message = '';
    Auth;
  	$state;

	/*@ngInject*/
	constructor(Auth, $state) {
		this.Auth = Auth;
		this.user = Auth.getCurrentUserSync();
		this.$state = $state;
	}

	changeInformation() {
        this.submitted = true;
        this.Auth.changeName(this.change.newName)
        .catch(err => {
            this.errors.other = err.message;
        })

        this.Auth.changeEmail(this.change.newEmail)
        .then(() => {
            this.message = "Information successfully updated!"
        })
        .catch(err => {
            this.errors.other = err.message;
        })

    }
}
