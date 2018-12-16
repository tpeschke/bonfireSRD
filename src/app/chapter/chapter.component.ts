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
    
  ngOnInit() {
    this.getChapter();
    this.notRedux.toggleShow(true);
    this.route.params.subscribe(p => {
      this.view = null;
      this.images = null;
      this.getChapter()
    })
  }

  ngOnDestroy() {
    this.notRedux.toggleShow(false);
  }

  view = null;
  images = null;

  getChapter(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.chapterService.getChapter(id)
      .subscribe(chapter => {
        this.view = chapter[0].chapter;
        this.images = chapter[0].images;
      })
  }

}
