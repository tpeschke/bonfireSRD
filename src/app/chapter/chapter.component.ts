import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})

export class ChapterComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService
    ) { } 
    
  ngOnInit() {
    this.getChapter();
    this.route.params.subscribe(p => {
      this.view = '<div></div>';
      this.getChapter()
    })
  }

  view = '<div></div>';

  getChapter(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.chapterService.getChapter(id)
      .subscribe(chapter => {
        this.view = chapter[0].chapter;
        console.log(this.view)
      })
  }

}
