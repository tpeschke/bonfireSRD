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
  loading = true

  ngOnInit() {
    this.chapterService.getChapterArray('1.h.1')
      .subscribe(chapterArray => {
        this.view = chapterArray
        if (this.view[this.view.length - 1].nextid) {
          this.getChapterChunk(this.view[this.view.length - 1].nextid)
        }
      })
  }

  getChapterChunk(next) {
    this.chapterService.getChapterArray(next)
      .subscribe(newArray => {
        this.view = this.view.concat(newArray)
        let finalInArray = this.view[this.view.length - 1]
        if (finalInArray.nextid && !finalInArray.inner) {
          this.getChapterChunk(finalInArray.nextid)
        } else if (finalInArray.inner[finalInArray.inner.length-1].nextid) {
          this.getChapterChunk(finalInArray.nextid)
        } else (
          this.loading = false
        )
      })
  }

}
