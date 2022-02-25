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
  ){}

  public videoplayed = 0;

  checkIfLoop () {
    if (this.videoplayed < 150) {
      let videoplayer: any = document.getElementById('video-background')
      videoplayer.load();
      ++this.videoplayed
    }
  }
  
}
