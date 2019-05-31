import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../chapter.service';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapter-nine',
  templateUrl: './chapter-nine.component.html',
  styleUrls: ['./chapter-nine.component.css']
})
export class ChapterNineComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  view = null;
  tables = [];
  chapterName = '';
  navDisplay = false;

  ngOnInit() {
    this.navDisplay = window.document.body.clientWidth > 500 ? true : false
    this.chapterService.getChapterArray(this.route.snapshot.url[1].path)
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
    this.navDisplay = false;
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

  displayTables() {
    this.navDisplay = !this.navDisplay
  }

}

