import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../chapter.service';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapter-four',
  templateUrl: './chapter-four.component.html',
  styleUrls: ['./chapter-four.component.css']
})
export class ChapterFourComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  view = null;
  side = [];
  chapterName = '';
  navDisplay = false;

  src = 'expert.png'

  ngOnInit() {
    this.navDisplay = window.document.body.clientWidth > 501 ? true : false
    this.chapterService.getChapterArray(4)
      .subscribe(chapterArray => {
        this.view = chapterArray.main
        this.side = chapterArray.side
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