import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../../chapter.service'

@Component({
  selector: 'app-chapter-two-advanced',
  templateUrl: './chapter-two-advanced.component.html',
  styleUrls: ['./chapter-two-advanced.component.css']
})
export class ChapterTwoAdvancedComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '4571px'}, side: [{ linkid: 'hnu', body: 'Strength', jump: '2h1' }, { linkid: 'hnu', body: 'Dexterity', jump: '2h2' }, { linkid: 'hnu', body: 'Constitution', jump: '2h3' }, { linkid: 'hnu', body: 'Intellect', jump: '2h4' }, { linkid: 'hnu', body: 'Wisdom', jump: '2h5' }, { linkid: 'hnu', body: 'Charisma', jump: '2h6' }, { linkid: 'hnu', body: 'Ability Checks', jump: '2h7' }]};

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe(tier => {
      if (tier < 1) {
        this.router.navigate(['/chapter/2'])
      }
    })
    this.navDisplay = window.document.body.clientWidth > 650 ? true : false
    this.notRedux.toggleShow(true);
  }

  ngOnDestroy() {
    this.navDisplay = false;
    this.notRedux.toggleShow(false);
    this.chapterName = ''
  }

  displayTables() {
    this.navDisplay = !this.navDisplay
  }
}
