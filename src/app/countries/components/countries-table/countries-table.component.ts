import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styles: `
    img {
      width: 100px;
      border-radius: 5px;
      margin: 3px;
    }
  `
})
export class CountriesTableComponent {

  public countriesData = input.required<Country[]>();

  public displayedColumns: string[] = ['flag', 'name', 'capital', 'population'];

}
