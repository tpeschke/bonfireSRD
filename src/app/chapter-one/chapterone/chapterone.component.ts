import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../chapter.service';

@Component({
  selector: 'app-chapterone',
  templateUrl: './chapterone.component.html',
  styleUrls: ['./chapterone.component.css']
})
export class ChapteroneComponent implements OnInit {

  constructor(
    private chapterService: ChapterService,
  ) { }

  view = null

  ngOnInit() {
    this.chapterService.getChapterArray('1.h.1')
      .subscribe(chapterArray => {
        this.view = chapterArray
      })
  }

}
