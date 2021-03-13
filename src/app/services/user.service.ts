import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserRequest } from '../models/userRequest.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    private url = "https://run.mocky.io/v3/d5ddf1ff-a0e2-4a7e-bbcc-e832bef6a503";

	constructor(private http : HttpClient) { 

	}

    getUsers() : Observable<UserRequest>{
		return this.http.get<UserRequest>(this.url)
	}

}