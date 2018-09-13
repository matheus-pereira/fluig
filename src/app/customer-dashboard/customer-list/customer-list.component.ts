import { Component, Input } from '@angular/core';
import { Customer } from '../customer.interface';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  @Input() customers: Customer[] = [];
}
