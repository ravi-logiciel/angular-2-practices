import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './../app.component';
import { FormComponent } from './../modules/form/form.component';
import { HomeComponent } from './../modules/home/home.component';

/**
 * Routes
 */
const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomeComponent,
	},
	{
		path: 'home',
		pathMatch: 'full',
		component: HomeComponent
	},
	{
		path: 'form',
		pathMatch: 'full',
		component: FormComponent
	}
];

/**
 * Build Routes
 */
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

/**
 * App Route Module
 */
export class AppRouteModule { }

/**
 * Route Components
 */
export const RouteComponents = [
	HomeComponent,
	FormComponent,
];