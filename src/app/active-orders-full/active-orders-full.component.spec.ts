import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrdersFullComponent } from './active-orders-full.component';

describe('ActiveOrdersFullComponent', () => {
  let component: ActiveOrdersFullComponent;
  let fixture: ComponentFixture<ActiveOrdersFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOrdersFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOrdersFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
