import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxValidationComponent } from './checkbox-validation.component';

describe('CheckboxValidationComponent', () => {
  let component: CheckboxValidationComponent;
  let fixture: ComponentFixture<CheckboxValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
