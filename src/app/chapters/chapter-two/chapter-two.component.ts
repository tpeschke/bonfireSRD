import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../chapter.service'

@Component({
  selector: 'app-chapter-two',
  templateUrl: './chapter-two.component.html',
  styleUrls: ['./chapter-two.component.css']
})
export class ChapterTwoComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '3871px'}, side: [{linkid: 'h', body: 'ABILITY CHECKS', jump: '2h7'}, {linkid: 'hg', body: 'OPPOSED CHECKS', jump: '2hg24'}, {linkid: 'h', body: 'STRENGTH', jump: '2h1'}, {linkid: 'hg', body: 'DAMAGE', jump: '2hg1'}, {linkid: 'hg', body: 'CARRY', jump: '2hg2'}, {linkid: 'hg', body: 'SOCIAL DIE', jump: '2hg3'}, {linkid: 'h', body: 'DEXTERITY', jump: '2h2'}, {linkid: 'hg', body: 'ATTACK', jump: '2hg4'}, {linkid: 'hg', body: 'DEFENCE', jump: '2hg5'}, {linkid: 'hg', body: 'INITIATIVE', jump: '2hg6'}, {linkid: 'hg', body: 'SOCIAL DIE', jump: '2hg7'}, {linkid: 'h', body: 'CONSTITUTION', jump: '2h3'}, {linkid: 'hg', body: 'MIN HEALTH', jump: '2hg8'}, {linkid: 'hg', body: 'FATIGUE ADJ.', jump: '2hg9'}, {linkid: 'hg', body: 'SOCIAL DIE', jump: '2hg10'}, {linkid: 'h', body: 'INTELLECT', jump: '2h4'}, {linkid: 'hg', body: 'ATTACK', jump: '2hg11'}, {linkid: 'hg', body: 'LvL CrP', jump: '2hg13'}, {linkid: 'hg', body: 'SOCIAL DIE', jump: '2hg15'}, {linkid: 'h', body: 'WISDOM', jump: '2h5'}, {linkid: 'hg', body: 'DEFENSE', jump: '2hgawznvaFied'}, {linkid: 'hg', body: 'FATIGUE ADJ.', jump: '2hg16'}, {linkid: 'hg', body: 'INITIATIVE', jump: '2hg17'}, {linkid: 'hg', body: 'MIN SP', jump: '2hg18'}, {linkid: 'hg', body: 'SOCIAL DIE', jump: '2hg19'}, {linkid: 'h', body: 'CHARISMA', jump: '2h6'}, {linkid: 'hg', body: 'FAVOR', jump: '2hg20'}, {linkid: 'hg', body: 'START HONOR', jump: '2hg21'}, {linkid: 'hg', body: 'SOCIAL DIE', jump: '2hg23'}]};

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe(tier => {
      if (+tier >= 1) {
        let searchParams = this.router.url.split('=')[1]
        if (searchParams) {
          this.router.navigate(['/chapter/2/advanced'], { queryParams: { search: searchParams }})
        } else {
          this.router.navigate(['/chapter/2/advanced'])
        }
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
