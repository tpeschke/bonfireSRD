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
      var id = null;
      var pos = 0;
      const scrollUp = () => {
        var elem = document.getElementById("patron-list");
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
          if (pos == elem.offsetHeight - 107) {
            clearInterval(id);
            scrollDown()
          } else {
            pos++;
            elem.style.marginTop = pos + 'px';
          }
        }
      }

      const scrollDown = () => {
        var elem = document.getElementById("patron-list");
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
          if (pos == (elem.offsetHeight * -1) + 107) {
            clearInterval(id);
            scrollUp()
          } else {
            pos--;
            elem.style.marginTop = pos + 'px';
          }
        }
      }

      scrollUp()
    })
  }

  rotatePatrons = () => {
    const patron = this.patronArray.pop()
    this.patronArray.unshift(patron)
  }

} 
