import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule  } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { GoogleChartsModule } from 'angular-google-charts';

import { PrivateComponent } from './private.component';
import { AdmonComponent } from './admon/admon.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
	{
		path: 'admon',
		component: AdmonComponent,
	},
	{
		path: 'analytics',
		component: AnalyticsComponent,
	},
];

@NgModule({
  declarations: [
    PrivateComponent,
    AdmonComponent,
    AnalyticsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule ,
    MatPaginatorModule,
    GoogleChartsModule, 
  ],
})
export class PrivateModule { }
