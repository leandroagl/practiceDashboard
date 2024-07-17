import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MikrotikRoutingModule } from './mikrotik-routing.module';
import { RouterDashboardComponent } from './pages/router-dashboard/router-dashboard.component';
import { RouterListComponent } from './pages/router-list/router-list.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    RouterDashboardComponent,
    RouterListComponent
  ],
  imports: [
    CommonModule,
    MikrotikRoutingModule,
    MaterialModule
  ]
})
export class MikrotikModule { }
