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
    private notRedux: NotReduxService;
    ) { } 
    
  ngOnInit() {
    this.getChapter();
    this.notRedux.toggleShow(true);
    this.route.params.subscribe(p => {
      this.view = '<div></div>';
      this.images = '<div></div>';
      this.getChapter()
    })
  }

  ngOnDestroy() {
    this.notRedux.toggleShow(false);
  }

  public view = '<div></div>';
  public images = '<div></div>';

  getChapter(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.chapterService.getChapter(id)
      .subscribe(chapter => {
        this.view = chapter[0].chapter;
        this.images = chapter[0].images;
      })
  }

}
