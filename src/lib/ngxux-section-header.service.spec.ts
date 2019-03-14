import { TestBed } from '@angular/core/testing';

import { NgxuxSectionHeaderService } from './ngxux-section-header.service';

describe('NgxuxSectionHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxSectionHeaderService = TestBed.get(NgxuxSectionHeaderService);
    expect(service).toBeTruthy();
  });
});
