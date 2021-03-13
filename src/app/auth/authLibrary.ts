import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthLibrary{

    setUser(user){
        localStorage.setItem("user",JSON.stringify(user));
    }

    getUser(){
        return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")): null;
    }

    cleanUser(){
        localStorage.removeItem("user");
    }

}