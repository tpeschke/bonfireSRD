import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTenComponent } from './chapter-ten.component';

describe('ChapterTenComponent', () => {
  let component: ChapterTenComponent;
  let fixture: ComponentFixture<ChapterTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
