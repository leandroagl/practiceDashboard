import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

// ruta para los imports con @
import { Country } from '../interfaces/country.interface';
import { catchError, delay, Observable, of, tap } from 'rxjs';
import { CacheStorage } from '../interfaces/country-cache.interface';

// TODO tipado re las regiones

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private httpClient = inject(HttpClient);
  private baseUrl: string = 'https://restcountries.com/v3.1';

  public cacheStorage: CacheStorage = {
    allCountries: [],
    byRegion: { region: '', countries: [], tabIndex: 0 },
  };


  constructor() {
    this.loadFromLocalStorage();
  }

  private saveOnLocalStorage() {
    localStorage.setItem('countries-cache', JSON.stringify(this.cacheStorage));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('countries-cache')) return;

    this.cacheStorage = JSON.parse(localStorage.getItem('countries-cache')!)

  }

  private getCountriesRequest(url: string) {
    return this.httpClient.get<Country[]>(url).pipe(
      catchError(() => of([])),
      delay(1500)
    );
  }

  public getCountryByName( name: string ): Observable<Country[]> {
    return this.getCountriesRequest( `${this.baseUrl}/name/${name}` );
  }

  public getAllCountries() {
    return this.getCountriesRequest(`${this.baseUrl}/all`).pipe(
      tap((countries) =>
        this.cacheStorage.allCountries = countries,
      ),
      tap( () => this.saveOnLocalStorage() )
    );
  }

  public searchRegion(region: string, tabIndex: number): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap( countries =>
        this.cacheStorage.byRegion = { region, countries, tabIndex }
      ),
      tap(() => this.saveOnLocalStorage()),
    );
  }



  // TODO: searchAlphaCode()
}
