/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { List1Service } from './list1.service';

describe('List1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [List1Service]
    });
  });

  it('should ...', inject([List1Service], (service: List1Service) => {
    expect(service).toBeTruthy();
  }));
});
