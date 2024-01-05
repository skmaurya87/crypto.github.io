import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceMetricsComponent } from './audience-metrics.component';

describe('AudienceMetricsComponent', () => {
  let component: AudienceMetricsComponent;
  let fixture: ComponentFixture<AudienceMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudienceMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudienceMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
