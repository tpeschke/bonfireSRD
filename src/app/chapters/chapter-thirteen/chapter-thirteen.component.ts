import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { ChapterService } from '../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-thirteen',
  templateUrl: './chapter-thirteen.component.html',
  styleUrls: ['./chapter-thirteen.component.css']
})
export class ChapterThirteenComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '14300px'}, side: [{linkid: 'h', body: 'ANATOMY of the DIVINE', jump: '13hmMbVNdHvSm'}, {linkid: 'hg', body: 'COVENANTS', jump: '13hgUVYhQTAJCM'}, {linkid: 'hg', body: 'COSMIC LINKS', jump: '13hggAArBCEJuT'}, {linkid: 'h', body: 'FAVOR of the DIVINES', jump: '13hacRMGkCtmw'}, {linkid: 'hg', body: 'WHAT is FAVOR?', jump: '13xPXaMCeoPr'}, {linkid: 'hg', body: 'LEVELS of DEVOTION', jump: '13xviDEqbQNr'}, {linkid: 'hg', body: 'ACQUIRING FAVOR', jump: '13hVGIXxVfZqo'}, {linkid: 'hg', body: 'MAXIMUM FAVOR', jump: '13hgdrvmprDoIB'}, {linkid: 'h', body: 'INVOKING MIRACLES', jump: '13hAOcmpEBTXJ'}, {linkid: 'hg', body: 'STEP 1: DETERMINE COST', jump: '13IyTBoxKKBp'}, {linkid: 'hg', body: 'STEP 2: SELECT, MODIFY, and ROLL YOUR INVOCATION', jump: '13nbjCTCCrzW'}, {linkid: 'hg', body: 'STEP 3: ADD IT ALL TOGETHER', jump: '13WexUdJMNav'}, {linkid: 'hg', body: 'STEP 4: MODIFY YOUR MIRACLE', jump: '13aWSPWoQmzE'}, {linkid: 'hg', body: 'STEP 5: RECORD NEW CURRENT FAVOR', jump: '13WexUdJMNav'}, {linkid: 'h', body: 'MIRACLE DESCRIPTIONS', jump: '13hCgZNYddaGo'}, {linkid: 'hg', body: 'CREATING MIRACLES on the FLY', jump: '13KIBnGgkrlt'}, {linkid: 'hg', body: 'DESCRIPTION LAYOUT', jump: '13gJYfuAarwQ'}, {linkid: 'hg', body: 'ALTER WEATHER', jump: '13RzGDNlduFb'}, {linkid: 'hg', body: 'ANOINT', jump: '13yWQzyFJmub'}, {linkid: 'hg', body: 'AUGER DEAD ', jump: '13FwMaOiVMqm'}, {linkid: 'hg', body: 'BLESSING of PROTECTION ', jump: '13JrJLVlLIqM'}, {linkid: 'hg', body: 'CHARM ANIMAL ', jump: '13wXrMeeDSUi'}, {linkid: 'hg', body: 'COMMAND', jump: '13wFHHgupQEc'}, {linkid: 'hg', body: 'CONFOUND ', jump: '13QhkCcjrIub'}, {linkid: 'hg', body: 'CURSE ', jump: '13WhxgkSfFTv'}, {linkid: 'hg', body: 'DISGUISE ', jump: '13zRJfPtdCdm'}, {linkid: 'hg', body: 'DIVINE CALL ', jump: '13FliZMKvVSs'}, {linkid: 'hg', body: 'DIVINE CHARISMA', jump: '13asFOMSsCzB'}, {linkid: 'hg', body: 'DRAIN ENERGY ', jump: '13nBKKvSymAN'}, {linkid: 'hg', body: 'EARTH GRIP ', jump: '13qcjpiBDJpH'}, {linkid: 'hg', body: 'EARTHQUAKE ', jump: '13umNHDuMCpi'}, {linkid: 'hg', body: 'EXALT CHAMPION ', jump: '13xxwypcdrUt'}, {linkid: 'hg', body: 'EXORCISM ', jump: '13rQMAhioeSg'}, {linkid: 'hg', body: 'GODSPEED ', jump: '13OkkIIStIJc'}, {linkid: 'hg', body: 'HEAL', jump: '13VVFUUItVpy'}, {linkid: 'hg', body: 'HARUSPICINA', jump: '13BjYeQzAQff'}, {linkid: 'hg', body: 'HOLY GRACE ', jump: '13SIwrAaFwcq'}, {linkid: 'hg', body: 'HOLY of HOLIES ', jump: '13ReHmUIrSXJ'}, {linkid: 'hg', body: 'IMBUE WITH FATE', jump: '13lDOkcTnLvi'}, {linkid: 'hg', body: 'INFLICT STRESS ', jump: '13btpNcOGhuf'}, {linkid: 'hg', body: 'INVEST OBJECT ', jump: '13BlCHISyyJl'}, {linkid: 'hg', body: 'INVOKE EMOTION ', jump: '13nLvwVpZebk'}, {linkid: 'hg', body: 'MANA ', jump: '13xpgfSViCXn'}, {linkid: 'hg', body: 'MARTYR ', jump: '13dGsCXuHHiU'}, {linkid: 'hg', body: 'MORTAL INVIGORATION ', jump: '13GQzHSufrja'}, {linkid: 'hg', body: 'OBSCURE SENSE ', jump: '13ZlHjJXvZah'}, {linkid: 'hg', body: 'OMEN ', jump: '13BzSFletvCf'}, {linkid: 'hg', body: 'PART SUBSTANCE ', jump: '13LjYvpuKHLO'}, {linkid: 'hg', body: 'PILLAR of FIRE ', jump: '13zTXzYgiXhs'}, {linkid: 'hg', body: 'PRAYER SEAL ', jump: '13vAVGKeDnAp'}, {linkid: 'hg', body: 'PREDICT WEATHER ', jump: '13OcJXGgzEWV'}, {linkid: 'hg', body: 'RELAX ', jump: '13gQYlCDLZzg'}, {linkid: 'hg', body: 'SUMMON OBJECT ', jump: '13APzrRphOki'}, {linkid: 'hg', body: 'TALK to ANIMALS ', jump: '13pQtcyfhSPE'}, {linkid: 'hg', body: 'TALK to PLANTS ', jump: '13wXqwvbQHBk'}, {linkid: 'hg', body: 'TRANSFORM ', jump: '13SvKURexGeV'}, {linkid: 'hg', body: 'TRAUMATIZE ', jump: '13xvnErrAKah'}, {linkid: 'hg', body: 'VEIL OF LIGHT/DARK ', jump: '13DPVrNfMVck'}, {linkid: 'hg', body: 'WATER FROM ROCK ', jump: '13WDXtZnzQog'}, {linkid: 'hg', body: 'ZONE of TRUTH ', jump: '13tQPwqWJTYv'}]};

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe(tier => {
      if (+tier >= 1) {
        let searchParams = this.router.url.split('=')[1]
        if (searchParams) {
          this.router.navigate(['/chapter/13/advanced'], { queryParams: { search: searchParams }})
        } else {
          this.router.navigate(['/chapter/13/advanced'])
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
