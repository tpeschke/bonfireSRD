import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../chapter.service';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-chapter-seven',
  templateUrl: './chapter-seven.component.html',
  styleUrls: ['./chapter-seven.component.css']
})
export class ChapterSevenComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '5690px'}, side: [{linkid: 'hg', body: 'ACUTE ALERTNESS', jump: '7pcyfynvpUuuf'}, {linkid: 'hg', body: 'ANTI-MAGICAL BLANK', jump: '7pcxafsXNGPfv'}, {linkid: 'hg', body: 'ANCESTRAL GUARDIAN', jump: '7pcxFmwhIONNG'}, {linkid: 'hg', body: 'ARCANE GRIP', jump: '7pcUoGocoUmZd'}, {linkid: 'hg', body: 'ARMOR TRAINING', jump: '7pcYyBLwmyXlz'}, {linkid: 'hg', body: 'BLIND FIGHTING', jump: '7pcPsAibddGlZ'}, {linkid: 'hg', body: 'BORN GUNNER', jump: '7pcfjvaeErvBq'}, {linkid: 'hg', body: 'CHARLATAN', jump: '7pccHDOWTvyrP'}, {linkid: 'hg', body: 'DASHER', jump: '7pcbMDtuWVXCH'}, {linkid: 'hg', body: 'DEADLY FLANKER', jump: '7pcrrvLJCYMzS'}, {linkid: 'hg', body: 'EARDSTAPA', jump: '7pcrxDPRIbzRb'}, {linkid: 'hg', body: 'EFFECTIVE RANGER', jump: '7pcGmekfdgGBQ'}, {linkid: 'hg', body: 'ELDRITCH ADEPT', jump: '7pcnulDTqgcfN'}, {linkid: 'hg', body: 'ENDURANCE', jump: '7pclWkFbeZGLd'}, {linkid: 'hg', body: 'FLEET FOOTED', jump: '7pclhHDobLJuR'}, {linkid: 'hg', body: 'GROUNDED MIND', jump: '7pcDzhSsNLZFA'}, {linkid: 'hg', body: 'HEALTHY', jump: '7pczitbLjimVo'}, {linkid: 'hg', body: 'IMPROVED DEFENSE', jump: '7pcIzeuGZLrtu'}, {linkid: 'hg', body: 'IRON SIDES', jump: '7pcItXtgCEHku'}, {linkid: 'hg', body: 'KNACK', jump: '7pcVjVtKqEPyA'}, {linkid: 'hg', body: 'POLYGLOT', jump: '7pcGuTJxjIlrq'}, {linkid: 'hg', body: 'QUICK HEALING', jump: '7pcRgosWZtjCi'}, {linkid: 'hg', body: 'SHIELD BREAKER', jump: '7pcMBYCvnrEkd'}, {linkid: 'hg', body: 'SHIELD TRAINING', jump: '7pceUELFZYOGQ'}, {linkid: 'hg', body: 'SPECIAL BOND', jump: '7pcchBIFEiadV'}, {linkid: 'hg', body: 'THIEVES CANT', jump: '7pcHJneVkjOHK'}, {linkid: 'hg', body: 'WEAPON TRAINING', jump: '7pcHIrCoaWTpS'}] };

  ngOnInit() {
    this.navDisplay = window.document.body.clientWidth > 650 ? true : false
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
