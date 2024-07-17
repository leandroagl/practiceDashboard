import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../layout/layout-page.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { AllCountriesComponent } from './pages/all-countries/all-countries.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'by-region', component: ByRegionComponent },
      { path: 'all-countries', component: AllCountriesComponent },
      { path: 'id/:id', component: CountryPageComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
