import { Component } from '@angular/core';
import { NotReduxService } from './not-redux.service';
import { NavigationCancel, Router } from '@angular/router'
import { fadeInAnimation } from './app.animations';
import { ChapterService } from './chapter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation]
})
export class AppComponent {
  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ){}

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe().unsubscribe()
  }
  
}
