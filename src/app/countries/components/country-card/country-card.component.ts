import { Component, Input, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-card',
  templateUrl: './country-card.component.html',
  styles: `
    mat-card {
      max-width: 400px;
    }
  `
})
export class CountryCardComponent {

  // public country = input.required<Country>()
  @Input()
  public country!: Country;

}
