import { Component, inject, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

// TODO: AOS Library


@Component({
  templateUrl: './all-countries.component.html',
  styles: ``,
})
export class AllCountriesComponent implements OnInit {
  private _countryService = inject(CountryService);
  private router          = inject(Router)

  public countries: Country[] = [];
  public country! : Country;

  public searchInput = new FormControl('');

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries() {
    this.countries = this._countryService.cacheStorage.allCountries!
  }

  clearSearchInput() {
    this.searchInput.reset();
    this.searchInput.markAsUntouched();
    this.getCountries()
  }

  searchCountry() {
    const valueSearch: string = this.searchInput.value || '';

    if( valueSearch !== '' && valueSearch.length > 2) {
      this._countryService.getCountryByName( valueSearch )
        .subscribe( countries => {
          this.countries = countries
          this.router.navigateByUrl(`/countries/id/${valueSearch}`)
        } )

        return
    }
    this.getCountries()
  }


}
