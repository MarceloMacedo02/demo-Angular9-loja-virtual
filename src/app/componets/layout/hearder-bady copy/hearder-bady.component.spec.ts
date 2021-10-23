import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderBadyComponent } from './hearder-bady.component';

describe('HearderBadyComponent', () => {
  let component: HearderBadyComponent;
  let fixture: ComponentFixture<HearderBadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearderBadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearderBadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
