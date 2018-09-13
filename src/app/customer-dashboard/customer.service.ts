import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.interface';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    constructor (private http: HttpClient) { }

    listCustomers() {
        return this.http.get<Customer[]>('assets/customers.json');
    }
}