import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { AuthLibrary } from './../auth/authLibrary';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  	constructor(private authLibrary : AuthLibrary, private router : Router) { }

	ngOnInit(): void {
	}

	close(event)
	{
		if(event)
		{
			event.preventDefault();
			event.stopPropagation();
		}
		this.authLibrary.cleanUser();
		this.router.navigate(['/login'])
	}

}
