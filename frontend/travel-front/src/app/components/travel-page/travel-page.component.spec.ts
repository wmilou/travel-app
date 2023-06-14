import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPageComponent } from './travel-page.component';

describe('TravelPageComponent', () => {
  let component: TravelPageComponent;
  let fixture: ComponentFixture<TravelPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelPageComponent]
    });
    fixture = TestBed.createComponent(TravelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
