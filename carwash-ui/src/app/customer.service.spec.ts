import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
 // let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    //service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service).toBeTruthy();
  });
});
