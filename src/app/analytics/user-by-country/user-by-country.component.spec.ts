import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserByCountryComponent } from './user-by-country.component';

describe('UserByCountryComponent', () => {
  let component: UserByCountryComponent;
  let fixture: ComponentFixture<UserByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
