import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSessionComponent } from './google-session.component';

describe('GoogleSessionComponent', () => {
  let component: GoogleSessionComponent;
  let fixture: ComponentFixture<GoogleSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
