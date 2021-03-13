import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { LoginService } from './../services/login.service';
import { AuthLibrary } from '../auth/authLibrary';
import { users } from '../dummy/user.dummy';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email: string;
	password: string;
	dontMatchUser: boolean = false;

	constructor(private loginService : LoginService, private router : Router, private authLibrary : AuthLibrary) { }

	ngOnInit(): void {

	}

	sendLogin(){
		this.loginService.login(this.email, this.password)
		.then(
			user => {
				if(user){
					delete user.password;
					this.authLibrary.setUser(user);
					this.router.navigate(['/private/admon'])
				}
				else{
					this.dontMatchUser = true;
				}
			}
		);
	}

}
