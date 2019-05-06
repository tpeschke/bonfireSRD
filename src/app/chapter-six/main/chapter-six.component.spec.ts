import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterSixComponent } from './chapter-six.component';

describe('ChapterSixComponent', () => {
  let component: ChapterSixComponent;
  let fixture: ComponentFixture<ChapterSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
