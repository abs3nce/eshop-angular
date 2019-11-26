import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHomeboxComponent } from './video-homebox.component';

describe('VideoHomeboxComponent', () => {
  let component: VideoHomeboxComponent;
  let fixture: ComponentFixture<VideoHomeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoHomeboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoHomeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
