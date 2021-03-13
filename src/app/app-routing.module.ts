import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivateComponent } from './private/private.component';

import { AuthGuardianSession } from "./auth/authGuardianSession";
import { AuthGuardianNoSession } from './auth/authGuardianNoSession';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [AuthGuardianNoSession],
	},
	{
		path: "private",
		component: PrivateComponent,
		loadChildren: () => import('src/app/private/private.module').then(m => m.PrivateModule),
		canActivate: [AuthGuardianSession],
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	declarations: [
		LoginComponent,
		NotFoundComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(routes),
		FormsModule,
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
