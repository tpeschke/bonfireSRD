import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { ChapterService } from '../../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-twelve-advanced',
  templateUrl: './chapter-twelve-advanced.component.html',
  styleUrls: ['./chapter-twelve-advanced.component.css']
})
export class ChapterTwelveAdvancedComponent implements OnInit {
  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '27800px'}, side: [{linkid: 'h', body: 'SPELLCRAFTING', jump: '12hxYuVopAeCj'}, {linkid: 'hg', body: 'STEP 0: FOR WILD MAGIC CASTERS ONLY: DETERMINE LOCATION', jump: '12XDdcNpzFVa'}, {linkid: 'hg', body: 'STEP 1: CHANGE MAGNITUDE', jump: '12JRFHeyddBZ'}, {linkid: 'hg', body: 'STEP 2: ALTAR AREA OF EFFECT (AOE)', jump: '12BUGxksaqOy'}, {linkid: 'hg', body: 'STEP 3: CALCULATE RANGE', jump: '12tEMXEgWzuS'}, {linkid: 'hg', body: 'STEP 4: CALCULATE DURATION', jump: '12LMWBMlnHGU'}, {linkid: 'hg', body: 'STEP 5: ALL TOGETHER NOW', jump: '12ZFWZIiQSko'}, {linkid: 'hnu', body: 'MAGICAL FALLOUT', jump: '12hbpShWgnLZn'}, {linkid: 'hnu', body: 'OCCULTIC MEDIUMS', jump: '12htFJHVbNZhe'}, {linkid: 'hnu', body: 'ORDERS of MAGIC', jump: '12hHqiIQJhOaR'}, {linkid: 'h', body: 'ALTERNATIVE WAYS TO CAST', jump: '12xGhfoJgnqk'}, {linkid: 'hg', body: 'SIMULCASTING', jump: '12VpvwOhUrtc'}, {linkid: 'hg', body: 'CONCERT CASTING', jump: '12cmXJgICOxS'}, {linkid: 'h', body: 'SPELL DESCRIPTIONS', jump: '12hobNEzGTJqO'}, {linkid: 'hg', body: 'TEACHING YOUR SPELLS TO OTHERS', jump: '12xOwUkqaBdx'}, {linkid: 'hg', body: 'ADDLE ', jump: '12ekMmbFdQXU'}, {linkid: 'hg', body: 'ALARM ', jump: '12dELAKYnaKO'}, {linkid: 'hg', body: 'ANCESTRAL LORE', jump: '12nAwUHdFZFI'}, {linkid: 'hg', body: 'ANTI-SENSORY BATH', jump: '12SHuESwPJuB'}, {linkid: 'hg', body: 'ANIMATE CORPSE ', jump: '12IoWApJKNZr'}, {linkid: 'hg', body: 'ARCANE VORTEX ', jump: '12xOiPXsZfqr'}, {linkid: 'hg', body: 'AUGER SECRET ', jump: '12ULQwzCtlZv'}, {linkid: 'hg', body: 'AURA of INNOCENCE', jump: '12YyNrxSgFJx'}, {linkid: 'hg', body: 'BANISH ', jump: '12xnIAhoojrY'}, {linkid: 'hg', body: 'BAR PORTAL ', jump: '12dRmruAkbnZ'}, {linkid: 'hg', body: 'BEASTIAL SIGHT ', jump: '12IvauigpDRn'}, {linkid: 'hg', body: 'BIND ELEMENTAL HEART ', jump: '12NwYgphFclA'}, {linkid: 'hg', body: 'BINDING GLYPH ', jump: '12hkVFXLuMGb'}, {linkid: 'hg', body: 'CHARISMATIC GLAMOR ', jump: '12eRcYzrgzmY'}, {linkid: 'hg', body: 'COMMUNE ', jump: '12NeFqWqZNaF'}, {linkid: 'hg', body: 'CORPSE HIDE ', jump: '12oPLuuvJUXW'}, {linkid: 'hg', body: 'CORPSE TONGUE ', jump: '12QheuxUduUO'}, {linkid: 'hg', body: 'DEATHWATCH ', jump: '12gHVRPvBkmR'}, {linkid: 'hg', body: 'DETECT MAGIC', jump: '12hsuzjRrFyl'}, {linkid: 'hg', body: 'DISPEL ENCHANTMENT', jump: '12ilajKnUCUE'}, {linkid: 'hg', body: 'DIVINE OBJECT ', jump: '12CfoTxiNtVV'}, {linkid: 'hg', body: 'DOMINATE', jump: '12xmLgFtbYyM'}, {linkid: 'hg', body: 'DOPPELGANGER ', jump: '12ElhRGoRjAh'}, {linkid: 'hg', body: 'DRAW POWER ', jump: '12ZBsgSKAsnJ'}, {linkid: 'hg', body: 'DREAMSTRIDE ', jump: '12oCQjXdvjNd'}, {linkid: 'hg', body: 'EARTH SHIFT ', jump: '12ioawIQNMFj'}, {linkid: 'hg', body: 'ELEMENTAL AFFINITY', jump: '12vHvbusDrYO'}, {linkid: 'hg', body: 'ELEMENTAL DEMI-PLANE ', jump: '12kfVoHijxtH'}, {linkid: 'hg', body: 'ELEMENTAL FORCE', jump: '12XnnZoXhQgM'}, {linkid: 'hg', body: 'ELEMENTAL FORM', jump: '12zxpoOHQEkn'}, {linkid: 'hg', body: 'FATE WELL', jump: '12UMCuVCCmhM'}, {linkid: 'hg', body: 'FLASHBANG ', jump: '12cHsaBlNScm'}, {linkid: 'hg', body: 'FATIGUE', jump: '12eOJdRpYHKw'}, {linkid: 'hg', body: 'FLOAT ', jump: '12KmKutMDqof'}, {linkid: 'hg', body: 'FORCE BIND SPIRIT ', jump: '12ZYUWNRJHcp'}, {linkid: 'hg', body: 'GREASE SLICK ', jump: '12KfoXhSpMNl'}, {linkid: 'hg', body: 'HASTE ', jump: '12TmLblQsnTA'}, {linkid: 'hg', body: 'HERMETIC DWEOMER', jump: '12hbjhCDDOIF'}, {linkid: 'hg', body: 'HINDSIGHT ', jump: '12wfROWAEwSn'}, {linkid: 'hg', body: 'HOOKGATE', jump: '12QjwKYbxARl'}, {linkid: 'hg', body: 'ICARIAN FLIGHT', jump: '12agveIRRipC'}, {linkid: 'hg', body: 'ILLUMINATE', jump: '12eiUXgiefNu'}, {linkid: 'hg', body: 'IMPROBABLE STAIR ', jump: '12zQFJjpTthJ'}, {linkid: 'hg', body: 'INDUCE INSANITY ', jump: '12VRWqBPBdpv'}, {linkid: 'hg', body: 'IRONHIDE', jump: '12ndqPKLINsV'}, {linkid: 'hg', body: 'KINETIC BURST', jump: '12OXgUCVxpgi'}, {linkid: 'hg', body: 'LIMINAL PLATFORM', jump: '12rgxtkxZllu'}, {linkid: 'hg', body: 'LORE MYSTERIUM', jump: '12LUIntSQNoD'}, {linkid: 'hg', body: 'MAGIC CIRCLE', jump: '12sdGCvpDOTY'}, {linkid: 'hg', body: 'MARIONETTE ', jump: '12DRVGKkgnCr'}, {linkid: 'hg', body: 'MASK of ZAL ', jump: '12xUuuYdCXcp'}, {linkid: 'hg', body: 'MESSAGE ', jump: '12aJoNIYCCYq'}, {linkid: 'hg', body: 'MIMIC ', jump: '12YdJTMoCcYU'}, {linkid: 'hg', body: 'MYSTIC MARK ', jump: '12CZbclJVLQM'}, {linkid: 'hg', body: 'OBSCURE ', jump: '12tXTXjtieoy'}, {linkid: 'hg', body: 'PHASING', jump: '12Cbzpvwwiso'}, {linkid: 'hg', body: 'PERFUME ', jump: '12vvkdLEPPpl'}, {linkid: 'hg', body: 'REMOVE ELEMENT ', jump: '12DzSYOuVcYt'}, {linkid: 'hg', body: 'REORIENT ', jump: '12KXxbBERjPM'}, {linkid: 'hg', body: 'RICOCHET ', jump: '12CyDylZobdj'}, {linkid: 'hg', body: 'SCRY ', jump: '12llwegGHwlT'}, {linkid: 'hg', body: 'SHATTERBIND', jump: '12GojqCROBKx'}, {linkid: 'hg', body: 'SHIFT WEATHER', jump: '12JDIwBKCcIT'}, {linkid: 'hg', body: 'SHOCK ', jump: '12sqJZKYJxij'}, {linkid: 'hg', body: 'SILENCE ', jump: '12ebyukqufTG'}, {linkid: 'hg', body: 'SLOW FALL ', jump: '12SDPjhpYGNa'}, {linkid: 'hg', body: 'SLOW METABOLISM ', jump: '12DUrosHAnPq'}, {linkid: 'hg', body: 'SMOKE SCREEN ', jump: '12wJazcolMpV'}, {linkid: 'hg', body: 'STITCH FLESH ', jump: '12vcTiXddvqk'}, {linkid: 'hg', body: 'SUMMONING ', jump: '12rCRxRNFxnG'}, {linkid: 'hg', body: 'STILL', jump: '12jkFGEstcVb'}, {linkid: 'hg', body: 'TELEKINESIS ', jump: '12kncdlNYNOp'}, {linkid: 'hg', body: 'TONGUES ', jump: '12XFmcGtkMCt'}, {linkid: 'hg', body: 'TURN ', jump: '12PIGYsckZDk'}, {linkid: 'hg', body: 'TROMPE L’OEIL ', jump: '12yzKKTYnYGz'}, {linkid: 'hg', body: 'WALL WALK', jump: '12dPVqAafmqv'}, {linkid: 'hg', body: 'WARD ', jump: '12oHDipeWKhR'}, {linkid: 'hg', body: 'WEB', jump: '12HdrKwTXlEJ'}]   };

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe(tier => {
      if (+tier < 1) {
        this.router.navigate(['/chapter/12'])
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