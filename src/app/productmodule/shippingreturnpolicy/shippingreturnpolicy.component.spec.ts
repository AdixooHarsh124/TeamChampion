import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingreturnpolicyComponent } from './shippingreturnpolicy.component';

describe('ShippingreturnpolicyComponent', () => {
  let component: ShippingreturnpolicyComponent;
  let fixture: ComponentFixture<ShippingreturnpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingreturnpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingreturnpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
