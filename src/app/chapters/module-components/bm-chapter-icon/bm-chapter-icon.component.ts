import { Component, OnInit, Input } from '@angular/core';
import { ChapterService } from '../../../chapter.service';

@Component({
  selector: 'app-bm-chapter-icon',
  templateUrl: './bm-chapter-icon.component.html',
  styleUrls: ['./bm-chapter-icon.component.css']
})
export class BmChapterIconComponent implements OnInit {

  @Input() id: any

  constructor(
    private chapterService: ChapterService
  ) { }

  ngOnInit() { }

  addBookmark(id) {
    this.chapterService.addBookmark(id)
      .subscribe(res => {})
  }

}
