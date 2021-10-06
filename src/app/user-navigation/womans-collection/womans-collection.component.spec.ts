import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomansCollectionComponent } from './womans-collection.component';

describe('WomansCollectionComponent', () => {
  let component: WomansCollectionComponent;
  let fixture: ComponentFixture<WomansCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomansCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomansCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
