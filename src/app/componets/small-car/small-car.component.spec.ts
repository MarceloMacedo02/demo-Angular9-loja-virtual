import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCarComponent } from './small-car.component';

describe('SmallCarComponent', () => {
  let component: SmallCarComponent;
  let fixture: ComponentFixture<SmallCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
