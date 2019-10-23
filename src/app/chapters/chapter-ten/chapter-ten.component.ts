import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { ChapterService } from '../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-ten',
  templateUrl: './chapter-ten.component.html',
  styleUrls: ['./chapter-ten.component.css']
})
export class ChapterTenComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '4650px'}, side: [{linkid: 'h', body: 'STARTING a COMBAT', jump: '10hakRpaRqrND'}, {linkid: 'hg', body: 'The CLOCK', jump: '10hgkMivUIHorL'}, {linkid: 'hg', body: 'STARTING INITIATIVE ', jump: '10hgxuNhMIIbra'}, {linkid: 'hg', body: 'ACTIONS', jump: '10hgSUsZSWLDmm'}, {linkid: 'h', body: 'The COMBAT', jump: '10hPpsSnSfLDT'}, {linkid: 'hg', body: 'ZONES of ENGAGEMENT: MEASURING YOUR OPPONENT', jump: '10hgsDSfKSfEAw'}, {linkid: 'hg', body: 'MELEE ATTACK & DEFENSE', jump: '10hgrAqUBiMqtw'}, {linkid: 'hg', body: 'RANGED ATTACK & DEFENSE', jump: '10hgWhFVCaqHCC'}, {linkid: 'hg', body: 'DEALING DAMAGE', jump: '10hgdzzBggxyzb'}, {linkid: 'hg', body: 'GAINING FATIGUE IN COMBAT', jump: '10hgGZXlbYmifU'}, {linkid: 'hg', body: 'GRIT', jump: '10hgkhtuHpUcPh'}, {linkid: 'hg', body: 'HEALTH & DAMAGE', jump: '10hgGvtwrnIOmt'}, {linkid: 'hg', body: 'TRAUMA', jump: '10hgxhgLSKeBpK'}, {linkid: 'hg', body: 'COUP de GRACE', jump: '10hgWcYkvVsIPr'}, {linkid: 'hg', body: 'FACING & FIGHTING MULTIPLE PEOPLE', jump: '10hgUnxGAkHaoZ'}, {linkid: 'hg', body: 'TACTICS', jump: '10hgKuowiuYcTE'}, {linkid: 'hg', body: 'BLEEDING OUT & DYING', jump: '10hgdPALGCCSTw'}, {linkid: 'h', body: 'ENDING COMBAT', jump: '10hpcjvwbBurZ'}]  };

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe(tier => {
      if (+tier >= 1) {
        let searchParams = this.router.url.split('=')[1]
        if (searchParams) {
          this.router.navigate(['/chapter/10/advanced'], { queryParams: { search: searchParams }})
        } else {
          this.router.navigate(['/chapter/10/advanced'])
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
