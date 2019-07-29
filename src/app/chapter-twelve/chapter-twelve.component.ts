import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../chapter.service';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-chapter-twelve',
  templateUrl: './chapter-twelve.component.html',
  styleUrls: ['./chapter-twelve.component.css']
})
export class ChapterTwelveComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '26531px'}, side: [{linkid: 'h', body: 'CASTING SPELLS', jump: '12hxYuVopAeCj'}, {linkid: 'hg', body: 'COST', jump: '12hgmZkrCwrRhy'}, {linkid: 'hg', body: 'COMPONENTS', jump: '12hgMfsoekgUAt'}, {linkid: 'hg', body: 'DURATION', jump: '12hgygscyoIFtj'}, {linkid: 'hg', body: 'SAVING THROW', jump: '12hgsTisSFZbpM'}, {linkid: 'hg', body: 'AREA of EFFECT', jump: '12hgmDtBkzEFud'}, {linkid: 'hnu', body: 'MAGICAL FALLOUT', jump: '12hbpShWgnLZn'}, {linkid: 'hnu', body: 'ORDERS of MAGIC', jump: '12hHqiIQJhOaR'}, {linkid: 'h', body: 'SPELL DESCRIPTIONS', jump: '12hobNEzGTJqO'}, {linkid: 'hg', body: 'ADDLE', jump: '12hgGHSwywbqHN'}, {linkid: 'hg', body: 'ALARM', jump: '12hgFZznDVRdzk'}, {linkid: 'hg', body: 'ANCESTRAL LORE', jump: '12hgcHzhPHVMbT'}, {linkid: 'hg', body: 'ANIMATE CORPSE', jump: '12hgrxTbVOtvNn'}, {linkid: 'hg', body: 'ARCANE GROUNDING', jump: '12hgLJkGZvUhQE'}, {linkid: 'hg', body: 'ASTRAL PROJECTION', jump: '12hgtGwTtrvraO'}, {linkid: 'hg', body: 'AUGER SECRET', jump: '12hgTtsEWzCrkY'}, {linkid: 'hg', body: 'AURA of INNOCENCE', jump: '12hgpHyPMMTOBy'}, {linkid: 'hg', body: 'BANISH', jump: '12hgzOIScgQmvJ'}, {linkid: 'hg', body: 'BAR PORTAL', jump: '12hgNXThDrgPlW'}, {linkid: 'hg', body: 'BIND  ELEMENTAL HEART', jump: '12hgWyCHLcuEOO'}, {linkid: 'hg', body: 'BINDING GLYPH', jump: '12hgapDHiRdRNU'}, {linkid: 'hg', body: 'CHARISMATIC GLAMOUR', jump: '12hgpXxglfplem'}, {linkid: 'hg', body: 'COMMUNE', jump: '12hgjhbjqpVucs'}, {linkid: 'hg', body: 'CONJURE WALL', jump: '12hgoEBajeCxOu'}, {linkid: 'hg', body: 'CORPSE HIDE', jump: '12hguprXtyqpxb'}, {linkid: 'hg', body: 'CORPSE TONGUE', jump: '12hgxrRUIHvpar'}, {linkid: 'hg', body: 'CORROSION', jump: '12hgQduPxtbCZT'}, {linkid: 'hg', body: 'DARKNESS', jump: '12hgyYWreBanDJ'}, {linkid: 'hg', body: 'DEATHWATCH', jump: '12hgIYzPEbFGFM'}, {linkid: 'hg', body: 'DETECT MAGIC', jump: '12hgCiZDTHWoXf'}, {linkid: 'hg', body: 'DISORIENT', jump: '12hgQxmouGKJgm'}, {linkid: 'hg', body: 'DISPEL ENCHANTMENT', jump: '12hgSkdrWYjMKY'}, {linkid: 'hg', body: 'DIVINE OBJECT', jump: '12hglqbmrdClbE'}, {linkid: 'hg', body: 'DOMINATE', jump: '12hgMYsVsqvBQV'}, {linkid: 'hg', body: 'DOPPELGANGER', jump: '12hgmzzlSgfTFD'}, {linkid: 'hg', body: 'EARTH SHIFT', jump: '12hggrwmVMtgXw'}, {linkid: 'hg', body: 'EASE PASSING', jump: '12hgtrweODHmnR'}, {linkid: 'hg', body: 'EAVESDROP', jump: '12hgVNhgIEGsmS'}, {linkid: 'hg', body: 'ELEMENTAL AFFINITY', jump: '12hgKMSJbJUlTg'}, {linkid: 'hg', body: 'ELEMENTAL DEMI-PLANE', jump: '12hgnUqPHwyRnw'}, {linkid: 'hg', body: 'ELEMENTAL FORCE', jump: '12hgnbCYbjTdRL'}, {linkid: 'hg', body: 'ELEMENTAL FORM', jump: '12hgPzSzvyGPqe'}, {linkid: 'hg', body: 'ENFEEBLE', jump: '12hggaRtqwHHVs'}, {linkid: 'hg', body: 'ENHANCE VISION', jump: '12hgQfKcFaObhL'}, {linkid: 'hg', body: 'FATE WELL', jump: '12hgIVEIVDlyCb'}, {linkid: 'hg', body: 'FATIGUE', jump: '12hgnLZrRcakIM'}, {linkid: 'hg', body: 'FLASH GRENADE', jump: '12hgIEeuUzhYrD'}, {linkid: 'hg', body: 'FLOAT', jump: '12hgmMAMkCaDzD'}, {linkid: 'hg', body: 'FORCE BIND SPIRIT', jump: '12hgwznjeSiDKm'}, {linkid: 'hg', body: 'FORCE OUTCRY', jump: '12hghnkjVpDXSy'}, {linkid: 'hg', body: 'FREEDOM of MOVEMENT', jump: '12hgwGRQjLwaVS'}, {linkid: 'hg', body: 'GREASE TRAP', jump: '12hgnqxieHiuts'}, {linkid: 'hg', body: 'HASTE / STILL', jump: '12hgjrVfEiUgQA'}, {linkid: 'hg', body: 'HERMETIC SNARE', jump: '12hgoBZBAnYNuo'}, {linkid: 'hg', body: 'HEX', jump: '12hgDaGUwxROqO'}, {linkid: 'hg', body: 'HINDSIGHT', jump: '12hgYSkkrthzlt'}, {linkid: 'hg', body: 'HOOKGATE', jump: '12hgRURGtzmirL'}, {linkid: 'hg', body: 'ICARIAN FLIGHT', jump: '12hgygNFsSXlke'}, {linkid: 'hg', body: 'ILLUMINATE', jump: '12hgYwtbOcyApb'}, {linkid: 'hg', body: 'ILLUSIONARY TERRAIN', jump: '12hgYnmuQNcoBA'}, {linkid: 'hg', body: 'IMPROBABLE STAIR', jump: '12hgiHtnOsDlKg'}, {linkid: 'hg', body: 'INDUCE INSANITY', jump: '12hgiEnXkyCUKv'}, {linkid: 'hg', body: 'IRONHIDE', jump: '12hgVyVgzYQEyC'}, {linkid: 'hg', body: 'KINETIC BURST', jump: '12hgoooGqlIoWM'}, {linkid: 'hg', body: 'LIMINAL PLATFORM', jump: '12hgxONKCOwmZm'}, {linkid: 'hg', body: 'LORE MYSTERIUM', jump: '12hgHoAAykcOvk'}, {linkid: 'hg', body: 'MAGIC CIRCLE', jump: '12hgJTEKfaLOJq'}, {linkid: 'hg', body: 'MARIONETTE', jump: '12hgfibiUkzdaH'}, {linkid: 'hg', body: 'MASK of ZAL', jump: '12hgAKQcJxQSUf'}, {linkid: 'hg', body: 'MESSAGE', jump: '12hgTxYuOLuvHI'}, {linkid: 'hg', body: 'MIMIC', jump: '12hgbxIVwLSSWp'}, {linkid: 'hg', body: 'MIND BLANK', jump: '12hgxJmmZZfPAF'}, {linkid: 'hg', body: 'MYSTIC MARK', jump: '12hggEZkJbUkUE'}, {linkid: 'hg', body: 'NEUTRALIZE POISON / TOXIN', jump: '12hgWnwWqtLYXr'}, {linkid: 'hg', body: 'NOXIOUS CLOUD', jump: '12hgnADagfwGON'}, {linkid: 'hg', body: 'OBSCURE', jump: '12hgLoLyISxWsL'}, {linkid: 'hg', body: 'PERFUME', jump: '12hgTuHbNSSSkX'}, {linkid: 'hg', body: 'PRIVATE CONVERSATION', jump: '12hgoWPIYkUugZ'}, {linkid: 'hg', body: 'REMOVE ELEMENT', jump: '12hgsGdIlxCeib'}, {linkid: 'hg', body: 'REPAIR', jump: '12hgAIUJMWbVUv'}, {linkid: 'hg', body: 'RICOCHET', jump: '12hgYLrSjBIGSl'}, {linkid: 'hg', body: 'SCRY', jump: '12hgMigcYKVUMn'}, {linkid: 'hg', body: 'SEQUESTER', jump: '12hgwqMMhHYOQK'}, {linkid: 'hg', body: 'SHIFT BLAME', jump: '12hgTnDRbBnnxc'}, {linkid: 'hg', body: 'SHIFT WEATHER', jump: '12hgbaOAmjNKZw'}, {linkid: 'hg', body: 'SHOCK', jump: '12hgYoVuPoHYxE'}, {linkid: 'hg', body: 'SILENCE', jump: '12hgJGuRtxNroM'}, {linkid: 'hg', body: 'SLOW FALL', jump: '12hgwSEcurizCk'}, {linkid: 'hg', body: 'SLOW METABOLISM', jump: '12hgUPBAEprdWu'}, {linkid: 'hg', body: 'SMOKE BOMB', jump: '12hgroifRYZLEd'}, {linkid: 'hg', body: 'STITCH FLESH', jump: '12hgIGDUQNZqFE'}, {linkid: 'hg', body: 'SUMMONING', jump: '12hgMMkHPUTRZo'}, {linkid: 'hg', body: 'TEAR FLESH', jump: '12hgzBIGqzABlg'}, {linkid: 'hg', body: 'TELEKINESIS', jump: '12hgFHbZKjaBws'}, {linkid: 'hg', body: 'TONGUES', jump: '12hgEwZZJxieGv'}, {linkid: 'hg', body: 'TRACKER’S BEACON', jump: '12hgKeZdIenRKo'}, {linkid: 'hg', body: 'TROMPE L’OEIL', jump: '12hgfIyiFUMMps'}, {linkid: 'hg', body: 'TRUE SEEING', jump: '12hgszleQAkDzB'}, {linkid: 'hg', body: 'TURN', jump: '12hgfYwwSBtmtH'}, {linkid: 'hg', body: 'VISCOUS TRAP', jump: '12hgRcQzcPlgdM'}, {linkid: 'hg', body: 'WALL WALK', jump: '12hgCfgKuFqjGA'}, {linkid: 'hg', body: 'WARD', jump: '12hgtrCCtNUQae'}]   };

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
