import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offer4Component } from './offer4.component';

describe('Offer4Component', () => {
  let component: Offer4Component;
  let fixture: ComponentFixture<Offer4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Offer4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Offer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
