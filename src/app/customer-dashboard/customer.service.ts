import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.interface';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    constructor (private http: HttpClient) { }

    listCustomers() {
        return this.http.get<any>('https://randomapi.com/api/cfe9406d9c20f9adcefe02d92b8d7f4c');
    }
}