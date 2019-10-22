import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterThreeAdvancedComponent } from './chapter-three-advanced.component';

describe('ChapterThreeAdvancedComponent', () => {
  let component: ChapterThreeAdvancedComponent;
  let fixture: ComponentFixture<ChapterThreeAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterThreeAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterThreeAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
