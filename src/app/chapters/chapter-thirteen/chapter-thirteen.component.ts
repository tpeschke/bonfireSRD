import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../chapter.service';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapter-thirteen',
  templateUrl: './chapter-thirteen.component.html',
  styleUrls: ['./chapter-thirteen.component.css']
})
export class ChapterThirteenComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '10879px'}, side: [{linkid: 'h', body: 'ANATOMY of the DIVINE', jump: '13hmMbVNdHvSm'}, {linkid: 'hg', body: 'COVENANTS', jump: '13hgUVYhQTAJCM'}, {linkid: 'hg', body: 'COSMIC LINKS', jump: '13hggAArBCEJuT'}, {linkid: 'hnu', body: 'FAVOR of the DIVINES', jump: '13hacRMGkCtmw'}, {linkid: 'h', body: 'ACQUIRING FAVOR', jump: '13hVGIXxVfZqo'}, {linkid: 'hg', body: 'SACRIFICES', jump: '13hgHiwEkAWHMj'}, {linkid: 'hg', body: 'MAXIMUM FAVOR', jump: '13hgdrvmprDoIB'}, {linkid: 'h', body: 'SPENDING FAVOR', jump: '13hAOcmpEBTXJ'}, {linkid: 'hg', body: 'MIRACLES OUTSIDE THE DIVINE’S COVENANT', jump: '13hgNhITtRCMaV'}, {linkid: 'hg', body: 'DO I KNOW EXACTLY WHEN A MIRACLE IS COMING?', jump: '13hgjLSDGNtWyb'}, {linkid: 'h', body: 'MIRACLE DESCRIPTIONS', jump: '13hCgZNYddaGo'}, {linkid: 'hg', body: 'ALTER WEATHER', jump: '13hgqYlHrGqMcZ'}, {linkid: 'hg', body: 'ANOINT', jump: '13hgjKosVPkpOX'}, {linkid: 'hg', body: 'AUGER DEAD', jump: '13hgNipoUbteqr'}, {linkid: 'hg', body: 'BLESS', jump: '13hgwvpCXDUbbV'}, {linkid: 'hg', body: 'BLESSING of PROTECTION', jump: '13hgSzuRjrKeoo'}, {linkid: 'hg', body: 'CHARM ANIMAL', jump: '13hgYBHLOZDcyD'}, {linkid: 'hg', body: 'COMMAND', jump: '13hgeLxhflasNm'}, {linkid: 'hg', body: 'CONFOUND', jump: '13hguFchVbbKpN'}, {linkid: 'hg', body: 'CURSE', jump: '13hgvIOZsgwBUT'}, {linkid: 'hg', body: 'DISGUISE', jump: '13hgARZlFgXeQp'}, {linkid: 'hg', body: 'DIVINE CALL', jump: '13hgBrAymxrRKp'}, {linkid: 'hg', body: 'DIVINE CHARISMA', jump: '13hgzEHCTsBFsk'}, {linkid: 'hg', body: 'DRAIN ENERGY', jump: '13hgVwuKHflTnP'}, {linkid: 'hg', body: 'EARTH GRIP', jump: '13hgxChIYrOwpE'}, {linkid: 'hg', body: 'EARTHQUAKE', jump: '13hgqPWwwBhoMM'}, {linkid: 'hg', body: 'EXALT CHAMPION', jump: '13hgiTjEXOFMwi'}, {linkid: 'hg', body: 'EXORCISM', jump: '13hghqZgSWDLor'}, {linkid: 'hg', body: 'GODSPEED', jump: '13hgAnYpTriSGn'}, {linkid: 'hg', body: 'GUIDANCE', jump: '13hghXvhSflLHQ'}, {linkid: 'hg', body: 'HAMPER MAGIC', jump: '13hgBtGFQdYbaU'}, {linkid: 'hg', body: 'HEAL', jump: '13hgWDMbjSqARZ'}, {linkid: 'hg', body: 'HOLY GRACE', jump: '13hgEotpbGhstR'}, {linkid: 'hg', body: 'HOLY of HOLIES', jump: '13hgPFpCFBOUno'}, {linkid: 'hg', body: 'IMBUE WITH FATE', jump: '13hgqBYbamdNmC'}, {linkid: 'hg', body: 'INFLICT STRESS', jump: '13hgbfpUMrCrtp'}, {linkid: 'hg', body: 'INVEST OBJECT', jump: '13hgeTPoqfottz'}, {linkid: 'hg', body: 'INVOKE EMOTION', jump: '13hggJTRVVENDS'}, {linkid: 'hg', body: 'MANA', jump: '13hgyXuryLHQGA'}, {linkid: 'hg', body: 'MARTYR', jump: '13hgnzucCojLZS'}, {linkid: 'hg', body: 'MIGHT of DEITY', jump: '13hgXjsIiHabFy'}, {linkid: 'hg', body: 'MORTAL INVIGORATION', jump: '13hgavvudGNloj'}, {linkid: 'hg', body: 'OBSCURE SENSE', jump: '13hggrZHiOTJfp'}, {linkid: 'hg', body: 'PART SUBSTANCE', jump: '13hgomfJlUTUba'}, {linkid: 'hg', body: 'PILLAR of FIRE', jump: '13hgoXSSgBAHXG'}, {linkid: 'hg', body: 'PREDICT WEATHER', jump: '13hgjRvsCZGGMG'}, {linkid: 'hg', body: 'RELAX', jump: '13hgmQpDxredkz'}, {linkid: 'hg', body: 'SCRY', jump: '13hglvcQQGnOPE'}, {linkid: 'hg', body: 'SOOTHING AURA', jump: '13hguBtykDuALg'}, {linkid: 'hg', body: 'SUMMON OBJECT', jump: '13hgVIzwDEchfb'}, {linkid: 'hg', body: 'TALK to ANIMALS', jump: '13hgvidsAezdGd'}, {linkid: 'hg', body: 'TALK to PLANTS', jump: '13hgmPlRtrOfkO'}, {linkid: 'hg', body: 'TRANSFORM', jump: '13hgnWrnjWCpvC'}, {linkid: 'hg', body: 'TRAUMATIZE', jump: '13hgOpWOrgAEpk'}, {linkid: 'hg', body: 'VEIL OF LIGHT/DARK', jump: '13hgyaFydqdWLF'}, {linkid: 'hg', body: 'WATER FROM ROCK', jump: '13hgXyUxIwWcrb'}, {linkid: 'hg', body: 'ZONE of TRUTH', jump: '13hgYETVMdGrGL'}]   };

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
