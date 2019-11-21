import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { Router } from '@angular/router';
import { ChapterService } from '../../chapter.service'

@Component({
  selector: 'app-chapter-seven',
  templateUrl: './chapter-seven.component.html',
  styleUrls: ['./chapter-seven.component.css']
})
export class ChapterSevenComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '5020px'}, side: [{linkid: 'hg', body: 'ACUTE ALERTNESS', jump: '7pcyfynvpUuuf'}, {linkid: 'hg', body: 'ANTI-MAGICAL BLANK', jump: '7pcxafsXNGPfv'}, {linkid: 'hg', body: 'ARMOR BASIC TRAINING', jump: '7pcYyBLwmyXlz'}, {linkid: 'hg', body: "BELOVED", jump: '7rmMviXyIOc'}, {linkid: 'hg', body: 'BLIND FIGHTING', jump: '7pcPsAibddGlZ'}, {linkid: 'hg', body: 'DASHER', jump: '7pcbMDtuWVXCH'}, {linkid: 'hg', body: 'DEADLY FLANKER', jump: '7pcrrvLJCYMzS'}, {linkid: 'hg', body: 'DECEITFUL MEASURE', jump: '7pcGmekfdgGBQ'}, {linkid: 'hg', body: 'ELDRITCH ADEPT', jump: '7pcnulDTqgcfN'}, {linkid: 'hg', body: 'MARATHONER', jump: '7pclWkFbeZGLd'}, {linkid: 'hg', body: 'FLEET FOOTED', jump: '7pclhHDobLJuR'}, {linkid: 'hg', body: 'GRACE UNDER PRESSURE', jump: '7cdtRSZmJzJc'}, {linkid: 'hg', body: 'GROUNDED MIND', jump: '7pcDzhSsNLZFA'}, {linkid: 'hg', body: 'VITALITYY', jump: '7pczitbLjimVo'}, {linkid: 'hg', body: 'IMPROVED DEFENSE', jump: '7pcIzeuGZLrtu'}, {linkid: 'hg', body: 'IRON SIDES', jump: '7pcItXtgCEHku'}, {linkid: 'hg', body: 'KNACK', jump: '7pcVjVtKqEPyA'}, {linkid: 'hg', body: 'POLYGLOT', jump: '7pcGuTJxjIlrq'}, {linkid: 'hg', body: 'QUICK HEALING', jump: '7pcRgosWZtjCi'}, {linkid: 'hg', body: 'SHIELD BASIC TRAINING', jump: '7pceUELFZYOGQ'}, {linkid: 'hg', body: 'THAUMATURGE', jump: '7pcxFmwhIONNG'}, {linkid: 'hg', body: 'THIEVES CANT', jump: '7pcHJneVkjOHK'}, {linkid: 'hg', body: 'WEAPON BASIC TRAINING', jump: '7pcHIrCoaWTpS'}] };

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe(tier => {
      if (+tier >= 1) {
        let searchParams = this.router.url.split('=')[1]
        if (searchParams) {
          this.router.navigate(['/chapter/7/advanced'], { queryParams: { search: searchParams }})
        } else {
          this.router.navigate(['/chapter/7/advanced'])
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
