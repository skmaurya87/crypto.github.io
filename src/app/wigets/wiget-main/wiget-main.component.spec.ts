import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WigetMainComponent } from './wiget-main.component';

describe('WigetMainComponent', () => {
  let component: WigetMainComponent;
  let fixture: ComponentFixture<WigetMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WigetMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WigetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
