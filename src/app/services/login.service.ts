import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginLibrary } from '../login/loginLibrary';
import { BackendDummy } from "../dummy/backend.dummy";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private backendDummy : BackendDummy, private loginLibrary : LoginLibrary){

    }

    async login( user: string, password: string) {
        return this.backendDummy.simulateLogin(user,this.loginLibrary.encodePassword( password ) );
    }

}