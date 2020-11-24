import { TestBed } from '@angular/core/testing';

import { CoursesDataService } from './courses-data.service';

describe('CoursesDataService', () => {
  let service: CoursesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
