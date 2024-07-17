import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent {

  private _countryService = inject( CountryService );
  private activatedRoute  = inject( ActivatedRoute );
  private router          = inject( Router );

  // TODO: trabajar con los params para ver el pais recibido

}
