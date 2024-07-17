import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterDashboardComponent } from './pages/router-dashboard/router-dashboard.component';
import { RouterListComponent } from './pages/router-list/router-list.component';
import { LayoutPageComponent } from '../layout/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'router-list', component: RouterListComponent },
      { path: 'router-dashboard', component: RouterDashboardComponent },
      { path: '**', redirectTo: '' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MikrotikRoutingModule { }
