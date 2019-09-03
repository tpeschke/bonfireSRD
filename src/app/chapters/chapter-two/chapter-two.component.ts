import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapter-two',
  templateUrl: './chapter-two.component.html',
  styleUrls: ['./chapter-two.component.css']
})
export class ChapterTwoComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '4571px'}, side: [{ linkid: 'hnu', body: 'Strength', jump: '2h1' }, { linkid: 'hnu', body: 'Dexterity', jump: '2h2' }, { linkid: 'hnu', body: 'Constitution', jump: '2h3' }, { linkid: 'hnu', body: 'Intellect', jump: '2h4' }, { linkid: 'hnu', body: 'Wisdom', jump: '2h5' }, { linkid: 'hnu', body: 'Charisma', jump: '2h6' }, { linkid: 'hnu', body: 'Ability Checks', jump: '2h7' }]};

  ngOnInit() {
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
