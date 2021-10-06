import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSigninDropDownComponent } from './login-signin-drop-down.component';

describe('LoginSigninDropDownComponent', () => {
  let component: LoginSigninDropDownComponent;
  let fixture: ComponentFixture<LoginSigninDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSigninDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSigninDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
