import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; 
import { AuthLibrary } from './authLibrary';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardianSession implements CanActivate {

    constructor ( private router: Router, private authLibrary : AuthLibrary) {}

    canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {

        if(this.authLibrary.getUser())
        {
            return true;
        }

        this.router.navigate(['/login']);
        return false;

    }

}