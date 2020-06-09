import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  Customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.Customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.Customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.Customer = new Customer();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/customers']);
  }
}