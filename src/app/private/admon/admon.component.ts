import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { User } from "../../models/user.model";
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-admon',
  templateUrl: './admon.component.html',
  styleUrls: ['./admon.component.scss']
})
export class AdmonComponent implements OnInit  {

	displayedColumns: string[] = ['image', 'id', 'first_name', 'last_name', 'email','gender'];
	dataSource :  MatTableDataSource<User>;

	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(private userService : UserService) { }

	ngOnInit(): void {
		this.userService.getUsers()
		.subscribe(
			response => {
				this.dataSource = new MatTableDataSource<User>(response.users);
				this.dataSource.paginator = this.paginator;
			}
		)
	}

}
