import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../chapter.service';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})

export class ChapterComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  view = null;
  images = null;
  navDisplay = true;
  chapterName = '';

  ngOnInit() {
    this.getChapter();
    this.notRedux.toggleShow(true);
    this.route.params.subscribe(p => {
      this.view = null;
      this.images = null;
      this.navDisplay = window.document.body.clientWidth > 501 ? true : false
      this.getChapter()
    })
  }

  ngOnDestroy() {
    this.notRedux.toggleShow(false);
    this.view = null;
    this.images = null;
    this.navDisplay = true;
    this.chapterName = '';
  }

  displayTables() {
    this.navDisplay = !this.navDisplay
  }

  getChapter(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.chapterName = this.getName(+id.substring(1))
    this.chapterService.getChapter(id)
      .subscribe(chapter => {
        this.view = chapter[0].chapter;
        if (chapter[0].images === "<div></div>" || !chapter[0].images) {
          this.images = null
        } else {
          this.images = chapter[0].images;
        }
      })
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
