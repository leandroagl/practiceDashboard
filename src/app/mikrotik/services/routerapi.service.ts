import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterapiService {

  private baseUrl: string = 'https://ondra.ondravirtual.com.ar/rest/';

  constructor() { }
}
