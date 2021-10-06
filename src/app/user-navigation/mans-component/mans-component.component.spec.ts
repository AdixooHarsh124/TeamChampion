import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MansComponentComponent } from './mans-component.component';

describe('MansComponentComponent', () => {
  let component: MansComponentComponent;
  let fixture: ComponentFixture<MansComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MansComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MansComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
