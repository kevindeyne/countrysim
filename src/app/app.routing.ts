import { Routes } from '@angular/router';
// Layouts
import { CorporateLayoutComponent } from './@pages/layouts/corporate/corporate.component';
import { CorporateDashboardComponent } from './dashboard/dashboard.component';
import { LaborComponent } from './policies/labor/labor.component';
import { TaxesComponent } from './policies/taxes/taxes.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: CorporateLayoutComponent,
    children: [{
      path: '',
      component: CorporateDashboardComponent
    }, {
      path: 'dashboard',
      component: CorporateDashboardComponent
    }, {
      path: 'labor',
      component: LaborComponent
    }, {
      path: 'taxes',
      component: TaxesComponent
    }]
  }
];
