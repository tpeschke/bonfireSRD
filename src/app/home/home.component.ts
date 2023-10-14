import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private chapterService: ChapterService
  ) { }

  public patreon = this.chapterService.patreon
  public patronArray = []

  ngOnInit() {
    if (!this.patreon) {
      this.chapterService.checkPatreon().subscribe(patreon => this.patreon = patreon)
    }

    this.chapterService.getPatrons().subscribe(patrons => {
      this.patronArray = patrons
      if (this.patronArray.length > 1) {
        setInterval(this.rotatePatrons, 1000)
      }
    })
  }

  rotatePatrons = () => {
    const patron = this.patronArray.pop()
    this.patronArray.unshift(patron)
  }

} 
