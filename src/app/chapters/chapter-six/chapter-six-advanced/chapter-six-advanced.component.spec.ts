import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterSixAdvancedComponent } from './chapter-six-advanced.component';

describe('ChapterSixAdvancedComponent', () => {
  let component: ChapterSixAdvancedComponent;
  let fixture: ComponentFixture<ChapterSixAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterSixAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterSixAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
