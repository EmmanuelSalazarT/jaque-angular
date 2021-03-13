import { Component, OnInit } from '@angular/core';

import { SaleService } from './../../services/sale.service';
import { Sale } from '../../models/sale.model';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

	sales : Sale[];

	title = "Sale's report";
	type = 'LineChart';
	data : Array<Array<string|number>> = [["",0]];
	columnNames = ["Brand", "Sales",];
	options = {   
		hAxis: {
			title: 'Brand'
		},
		vAxis:{
			title: 'Quantity'
		},
	};
	width = window.innerWidth;
	height = 400;

	constructor(private saleService: SaleService) { }

	ngOnInit(): void {
		this.loadData();
	}
	
	@HostListener('window:resize', ['$event'])
	windowResizeEvent(event: WindowEventHandlers) {
		this.width = window.innerWidth;
	}

	loadData(){
		this.saleService.getSales()
		.subscribe(
			response => {
				this.sales = response.sales;
				this.generateChartReport();
			}
		);
	}

	generateChartReport()
	{
		let brands = [];
		this.data = [["",0]];
		for(let i=0;i<this.sales.length;i++)
		{
			let index = brands.indexOf(this.sales[i].car_make);
			if(index === -1)
			{
				this.data.push([this.sales[i].car_make,this.sales[i].quantity])
				brands.push(this.sales[i].car_make);
			}
			else
			{
				this.data[index] = [this.data[index][0],this.sales[i].quantity];
			}
		}
	}

}
