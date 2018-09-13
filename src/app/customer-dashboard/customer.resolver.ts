import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CustomerService } from './customer.service';

@Injectable({
    providedIn: 'root'
})
export class CustomerResolver implements Resolve<Observable<any>> {
    constructor(private service: CustomerService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.listCustomers();
    }
}