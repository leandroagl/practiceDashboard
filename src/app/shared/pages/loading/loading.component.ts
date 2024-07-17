import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'loading-spinner',
  standalone: true,
  imports: [ MaterialModule ],
  templateUrl: './loading.component.html',
  styles: ``
})
export class LoadingComponent {

}
