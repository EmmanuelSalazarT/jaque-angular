import { SHA3   } from 'sha3';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginLibrary {

    encodePassword(password){
        let hash = new SHA3  (512);

        hash.update(password);

        return hash.digest('hex')
    }

}