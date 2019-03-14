import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxSectionHeaderComponent } from './ngxux-section-header.component';

describe('NgxuxSectionHeaderComponent', () => {
  let component: NgxuxSectionHeaderComponent;
  let fixture: ComponentFixture<NgxuxSectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxSectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
