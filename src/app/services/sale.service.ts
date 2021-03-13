import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SaleRequest } from '../models/saleRequest.model';

@Injectable({
    providedIn: 'root'
})
export class SaleService {
    
    private url = "https://run.mocky.io/v3/15517ca5-7e07-4ebc-bf63-5b033ec4e16a";

	constructor(private http : HttpClient) { 

	}

    getSales() : Observable<SaleRequest>{
		return this.http.get<SaleRequest>(this.url)
	}

}