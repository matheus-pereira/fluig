import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerListComponent } from './customer-dashboard/customer-list/customer-list.component';
import { AppRoutingModule } from './app.routing.module';
import { FilterCustomerPipe } from './customer-dashboard/customer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerDashboardComponent,
    CustomerListComponent,
    FilterCustomerPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
