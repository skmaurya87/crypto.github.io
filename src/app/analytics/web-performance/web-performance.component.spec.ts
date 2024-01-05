import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPerformanceComponent } from './web-performance.component';

describe('WebPerformanceComponent', () => {
  let component: WebPerformanceComponent;
  let fixture: ComponentFixture<WebPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
