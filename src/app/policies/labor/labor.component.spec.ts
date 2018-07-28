import { LaborComponent } from './labor.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('LaborComponent', () => {
  let component: LaborComponent;
  let fixture: ComponentFixture<LaborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
