import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterEightComponent } from './chapter-eight.component';

describe('ChapterEightComponent', () => {
  let component: ChapterEightComponent;
  let fixture: ComponentFixture<ChapterEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
