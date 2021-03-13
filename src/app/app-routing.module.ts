import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './private/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivateComponent } from './private/private.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: "private",
		component: PrivateComponent,
		loadChildren: () => import('src/app/private/private.module').then(m => m.PrivateModule),
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
