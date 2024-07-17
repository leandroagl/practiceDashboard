import { Component, inject, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/region.interface';
import { delay } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent {

  private _countryService = inject( CountryService )
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  // public selectedRegion?: string;

  public selectedTab?:number = this._countryService.cacheStorage.byRegion?.tabIndex!

  public countries = this._countryService.cacheStorage.byRegion!.countries;

  getCountries() {
    this._countryService.cacheStorage.byRegion
  }

  byRegion( region: string, index: number ) {
    // Limpio la lista para poder meter un spinner
    this.countries = [];

    this._countryService.searchRegion( region, index )
      .pipe( delay(1500) )
      .subscribe( countries =>  this.countries = countries);
  }



}
