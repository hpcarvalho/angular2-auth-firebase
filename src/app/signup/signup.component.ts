import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { moveIn, fallIn } from '../router.animations';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
	animations: [moveIn(), fallIn()],
	host: { '[@moveIn]': '' }
})

export class SignupComponent implements OnInit {

	state: string = '';
	error: any;

	constructor(public af: AngularFire, private router: Router) { }

	ngOnInit() { }

	onSubmit(formData) {
		if (formData.valid) {
			this.af.auth.createUser({ email: formData.value.email, password: formData.value.password }
			).then((success) => {
				this.router.navigate(['/login'])
			}).catch((err) => {
				this.error = err;
			})
		}
	}
}