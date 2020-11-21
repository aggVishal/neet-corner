import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSeriesComponent } from './test-series.component';

describe('TestSeriesComponent', () => {
  let component: TestSeriesComponent;
  let fixture: ComponentFixture<TestSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
