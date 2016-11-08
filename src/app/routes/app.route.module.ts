import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { AppComponent } from './../app.component';
import { FormComponent } from './../modules/form/form.component';
import { HomeComponent } from './../modules/home/home.component';
import { PopupOneComponent } from './../popups/popup-one/popup-one.component';

/* Third Party Packages */
// Here

/**
 * App Routes
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
	},

	/**
	 * Popup Routes
	 */
	{
		path: 'p-1',
		pathMatch: 'full',
		component: PopupOneComponent
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
export const AppRouteComponents = [
	HomeComponent,
	FormComponent,
];