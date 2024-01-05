import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubefacebookWidgetComponent } from './youtubefacebook-widget.component';

describe('YoutubefacebookWidgetComponent', () => {
  let component: YoutubefacebookWidgetComponent;
  let fixture: ComponentFixture<YoutubefacebookWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubefacebookWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubefacebookWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
