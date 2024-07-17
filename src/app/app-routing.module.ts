import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './shared/pages/404/page404.component';
import { LayoutPageComponent } from './layout/layout-page.component';

const routes: Routes = [
  {
    path: 'countries',
    loadChildren:() => import('./countries/countries.module').then( m => m.CountriesModule ),
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableViewTransitions: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
