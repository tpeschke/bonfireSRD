import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../chapter.service';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-chapter-two',
  templateUrl: './chapter-two.component.html',
  styleUrls: ['./chapter-two.component.css']
})
export class ChapterTwoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '4751px'}, side: [{ linkid: 'hg', body: 'Strength', jump: '2h1' }, { linkid: 'hg', body: 'Dexterity', jump: '2h2' }, { linkid: 'hg', body: 'Constitution', jump: '2h3' }, { linkid: 'hg', body: 'Intellect', jump: '2h4' }, { linkid: 'hg', body: 'Wisdom', jump: '2h5' }, { linkid: 'hg', body: 'Charisma', jump: '2h6' }, { linkid: 'hg', body: 'Ability Checks', jump: '2h7' }]};

  ngOnInit() {
    this.navDisplay = window.document.body.clientWidth > 500 ? true : false
    this.chapterName = this.chapterService.getName(+this.route.snapshot.url[1].path);
    this.notRedux.toggleShow(true);
    this.route.params.subscribe(p => {
      this.chapterName = this.chapterService.getName(+this.route.snapshot.url[1].path)
    })
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
