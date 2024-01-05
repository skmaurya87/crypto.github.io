import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionByChannelComponent } from './session-by-channel.component';

describe('SessionByChannelComponent', () => {
  let component: SessionByChannelComponent;
  let fixture: ComponentFixture<SessionByChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionByChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionByChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
