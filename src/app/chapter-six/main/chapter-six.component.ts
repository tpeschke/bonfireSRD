import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../chapter.service';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapter-six',
  templateUrl: './chapter-six.component.html',
  styleUrls: ['./chapter-six.component.css']
})
export class ChapterSixComponent implements OnInit, OnDestroy {

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
    this.chapterName = this.chapterService.getName(+this.route.snapshot.url[1].path);
    this.notRedux.toggleShow(true);
    this.route.params.subscribe(p => {
      this.chapterName = this.chapterService.getName(+this.route.snapshot.url[1].path)
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

  displayTables() {
    this.navDisplay = !this.navDisplay
  }

}
