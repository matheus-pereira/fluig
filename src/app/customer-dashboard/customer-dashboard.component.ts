import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from './customer.interface';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  filter: string = '';
  customers: Customer[] = [];
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.customers = this.activatedRoute.snapshot.data['customers']['results'][0];
  }

}
