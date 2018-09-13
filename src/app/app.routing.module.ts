import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerResolver } from './customer-dashboard/customer.resolver';

const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'customers'
    },
    {
        path: 'customers',
        component: CustomerDashboardComponent,
        resolve: {
            customers: CustomerResolver
        }
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }