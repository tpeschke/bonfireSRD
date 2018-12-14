import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})

export class ChapterComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private router: Router
    ) { } 
    
  ngOnInit() {
    this.getChapter();
    this.route.params.subscribe(p => {
      this.getChapter()
    })
  }

  view = '<div></div>';

  getChapter(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.chapterService.getChapter(id)
      .subscribe(chapter => {
        this.view = chapter[0].chapter;
      })
  }

}
