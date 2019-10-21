import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterNineAdvancedComponent } from './chapter-nine-advanced.component';

describe('ChapterNineAdvancedComponent', () => {
  let component: ChapterNineAdvancedComponent;
  let fixture: ComponentFixture<ChapterNineAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterNineAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterNineAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
