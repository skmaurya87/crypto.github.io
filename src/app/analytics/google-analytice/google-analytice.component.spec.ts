import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAnalyticeComponent } from './google-analytice.component';

describe('GoogleAnalyticeComponent', () => {
  let component: GoogleAnalyticeComponent;
  let fixture: ComponentFixture<GoogleAnalyticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleAnalyticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAnalyticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
