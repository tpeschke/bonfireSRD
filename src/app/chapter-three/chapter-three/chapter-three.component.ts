import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../chapter.service';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapter-three',
  templateUrl: './chapter-three.component.html',
  styleUrls: ['./chapter-three.component.css']
})
export class ChapterThreeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  view = null;
  tables = [];
  chapterName = '';

  ngOnInit() {
    this.chapterService.getChapterArray(3)
      .subscribe(chapterArray => {
        this.view = chapterArray.main
        this.tables = chapterArray.side
      })
    this.getChapter();
    this.notRedux.toggleShow(true);
    this.route.params.subscribe(p => {
      this.getChapter()
    })
  }

  ngOnDestroy() {
    this.notRedux.toggleShow(false);
    this.chapterName = ''
  }

  getChapterChunk(next) {
    this.chapterService.getChapterArray(next)
      .subscribe(newArray => {
        this.view = this.view.concat(newArray)
        let finalInArray = this.view[this.view.length - 1]
        if (finalInArray.nextid && !finalInArray.inner) {
          this.getChapterChunk(finalInArray.nextid)
        } else if (finalInArray.inner[finalInArray.inner.length - 1].nextid) {
          this.getChapterChunk(finalInArray.nextid)
        }
      })
  }

  getChapter(): void {
    const id = this.route.snapshot.url[1].path
    this.chapterName = this.chapterService.getName(+id.substring(1))
  }

}
