import { Injectable } from '@angular/core';

import { LoginLibrary } from '../login/loginLibrary';
import { BackendDummy } from "../dummy/backend.dummy";
import { UserLogin } from './../models/userLogin.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private backendDummy : BackendDummy, private loginLibrary : LoginLibrary){

    }

    async login( user: string, password: string) : Promise<UserLogin> {
        return this.backendDummy.simulateLogin(user,this.loginLibrary.encodePassword( password ) );
    }

}