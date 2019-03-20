import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../chapter.service';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapterone',
  templateUrl: './chapterone.component.html',
  styleUrls: ['./chapterone.component.css']
})
export class ChapteroneComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  view = null
  loading = true
  chapterName = '';

  ngOnInit() {
    this.chapterService.getChapterArray('1.h.1')
      .subscribe(chapterArray => {
        this.view = chapterArray
        if (this.view[this.view.length - 1].nextid) {
          this.getChapterChunk(this.view[this.view.length - 1].nextid)
        }
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
        } else (
          this.loading = false
        )
      })
  }

  getChapter(): void {
    const id = this.route.snapshot.url[1].path
    this.chapterName = this.getName(+id.substring(1))
  }

  getName(id: number): string {
    switch (id) {
      case 1:
        return 'Character Creation';
      case 2:
        return 'Ability Scores';
      case 3:
        return 'Races';
      case 4:
        return 'Archetypes';
      case 5:
        return 'Flaws';
      case 6:
        return 'Character Vitals';
      case 7:
        return 'Masteries';
      case 8:
        return 'Skills';
      case 9:
        return 'Social';
      case 10:
        return 'Combat';
      case 11:
        return 'Equipment';
      case 12:
        return 'Magic';
      case 13:
        return 'Divine';
      case 14:
        return 'Character Progression';
      case 15:
        return 'Misc Rules';
      default:
        return 'Home';
    }
  }

}
