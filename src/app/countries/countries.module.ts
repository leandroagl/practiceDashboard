import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { MaterialModule } from '../material/material.module';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { AllCountriesComponent } from './pages/all-countries/all-countries.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { LoadingComponent } from '../shared/pages/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ByRegionComponent,
    CountryPageComponent,
    CountriesTableComponent,
    AllCountriesComponent,
    CountryCardComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MaterialModule,
    LoadingComponent,
    ReactiveFormsModule
  ]
})
export class CountriesModule { }
