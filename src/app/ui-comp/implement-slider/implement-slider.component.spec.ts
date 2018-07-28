import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementSliderComponent } from './implement-slider.component';

describe('ImplementSliderComponent', () => {
  let component: ImplementSliderComponent;
  let fixture: ComponentFixture<ImplementSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
