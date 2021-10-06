import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavagationComponent } from './user-navagation.component';

describe('UserNavagationComponent', () => {
  let component: UserNavagationComponent;
  let fixture: ComponentFixture<UserNavagationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNavagationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavagationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
