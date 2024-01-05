import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradehistroyComponent } from './tradehistroy.component';

describe('TradehistroyComponent', () => {
  let component: TradehistroyComponent;
  let fixture: ComponentFixture<TradehistroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradehistroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradehistroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
