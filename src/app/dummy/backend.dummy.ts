import { Injectable } from '@angular/core';
import {users} from './user.dummy';
import { UserLogin } from './../models/userLogin.model';

@Injectable({
    providedIn: 'root'
})
export class BackendDummy{

    async simulateLogin (email: string, password: string) : Promise<UserLogin>{
        for(let i=0;i<users.length;i++)
        {
            if(users[i].email == email && users[i].password == password)
            {
                return users[i];
            }
        }
        
        return null;
    }
}