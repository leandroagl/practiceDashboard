import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

interface SidebarItems {
  label: string;
  icon: string;
  url: string;
  pages: Pages[];
}

interface Pages {
  name: string;
  url: string;
}

@Component({
  standalone: true,
  imports: [ CommonModule, RouterModule, MaterialModule ],
  selector: 'layout-page',
  templateUrl: './layout-page.component.html',
  styles: `
    .mat-toolbar {
        background: rgb(4,0,36);
        background: linear-gradient(90deg, rgba(4,0,36,1) 0%, rgba(37,9,121,1) 0%, rgba(0,146,255,1) 100%);
        color: #fff;
      }
  `
})
export class LayoutPageComponent {

  public sidebarItems: SidebarItems[] = [
    {
      label: 'Countries Module',
      icon: 'flag',
      url: '/countries',
      pages: [
        { name: 'By Region', url: '/countries/by-region' },
        { name: 'All Countries', url: '/countries/all-countries' },
      ]
    }
  ]

}
