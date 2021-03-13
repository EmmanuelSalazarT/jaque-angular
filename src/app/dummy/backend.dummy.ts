import { Injectable } from '@angular/core';
import {users} from './user.dummy';

@Injectable({
    providedIn: 'root'
})
export class BackendDummy{

    async simulateLogin (email: string, password: string){
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