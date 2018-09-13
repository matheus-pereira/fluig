import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer.interface';

@Pipe({ name: 'filterCustomer' })
export class FilterCustomerPipe implements PipeTransform {
    transform(customers: Customer[], query: string) {
        query = query.trim().toLowerCase();

        if (query) {
            return customers.filter(customer => 
                Object.keys(customer).some(property => customer[property].toString().toLowerCase().includes(query))
            );
        } else {
            return customers;
        }
    }
}