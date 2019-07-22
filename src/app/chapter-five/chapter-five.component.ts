import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../chapter.service';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-chapter-five',
  templateUrl: './chapter-five.component.html',
  styleUrls: ['./chapter-five.component.css']
})
export class ChapterFiveComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '10055px'}, side: [{linkid: 'h', body: 'ROLLING FLAWS', jump: '5hIXwDXuAzcG'}, {linkid: 'h', body: 'CHERRY PICKING', jump: '5hezytjuhmmr'}, {linkid: 'h', body: 'FLAW DESCRIPTIONS', jump: '5hRAntvjfNde'}, {linkid: 'hg', body: 'ABSENT-MINDED', jump: '5pcZKIDPwMulS'}, {linkid: 'hg', body: 'ABUSIVE', jump: '5pcIQJOKLTaPb'}, {linkid: 'hg', body: 'ADDICT', jump: '5pcZzvNmKsLVc'}, {linkid: 'hg', body: 'AGEUSIA', jump: '5pcmqPRZcmFYa'}, {linkid: 'hg', body: 'AGORAPHOBIA', jump: '5pcoRijezzaoQ'}, {linkid: 'hg', body: 'APPEASER', jump: '5pcjibtAeqRlk'}, {linkid: 'hg', body: 'ARROGANT', jump: '5pcmXeDbMjXoc'}, {linkid: 'hg', body: 'ASTHMATIC', jump: '5pcNgxlgGJcGQ'}, {linkid: 'hg', body: 'ATHEIST', jump: '5pcEiCcoauPxi'}, {linkid: 'hg', body: 'AUDACIOUS', jump: '5pcpklKbWjLgC'}, {linkid: 'hg', body: 'BASTARD', jump: '5pckVCakUTOJf'}, {linkid: 'hg', body: 'BIGOT', jump: '5pcnLAXfKjpNr'}, {linkid: 'hg', body: 'BLIND, PARTIAL', jump: '5pcBIqtzBLkMa'}, {linkid: 'hg', body: 'BLIND, TOTAL', jump: '5pcJRhrfsTnFE'}, {linkid: 'hg', body: 'BOAR FACED', jump: '5pczyhJtqiogI'}, {linkid: 'hg', body: 'CALOUS', jump: '5pcBbMTPGbNyh'}, {linkid: 'hg', body: 'CLAUSTROPHOBIC', jump: '5pcNlSEgOWUCL'}, {linkid: 'hg', body: 'CLUBFOOTED', jump: '5pcNcqKKGNbUE'}, {linkid: 'hg', body: 'CRAVEN', jump: '5pcPdOHlZnfCs'}, {linkid: 'hg', body: 'CRUEL', jump: '5pcHQRlYZvqTP'}, {linkid: 'hg', body: 'CULT UPBRINGING', jump: '5pclNyYtRdyRB'}, {linkid: 'hg', body: 'DARK SECRET', jump: '5pcQzUFNWbIfp'}, {linkid: 'hg', body: 'DEAF', jump: '5pcxovFwgmtzs'}, {linkid: 'hg', body: 'DEATHWISH', jump: '5pcvttytCzYGv'}, {linkid: 'hg', body: 'DECADENT', jump: '5pcCMXfvavgxO'}, {linkid: 'hg', body: 'DEBTOR', jump: '5pcHMwNxFwWBB'}, {linkid: 'hg', body: 'DEPENDENT', jump: '5pckVecAucQxL'}, {linkid: 'hg', body: 'DERANGED', jump: '5pcSvoMVcLrro'}, {linkid: 'hg', body: 'DISHONEST', jump: '5pcWNowloWcwu'}, {linkid: 'hg', body: 'DISLOYAL', jump: '5pcbqnMqkFwvl'}, {linkid: 'hg', body: 'DISTRUSTING', jump: '5pcjZhgjlPLDh'}, {linkid: 'hg', body: 'EGOTISTICAL', jump: '5pcdXcoIoeubp'}, {linkid: 'hg', body: 'ENVIOUS', jump: '5pcMxqwnDooCr'}, {linkid: 'hg', body: 'EPILEPTIC', jump: '5pcAaoniYEXSF'}, {linkid: 'hg', body: 'EUNUCH', jump: '5pccQckAYGxUN'}, {linkid: 'hg', body: 'EXCOMMUNICATED', jump: '5pcfHvrrHiUcJ'}, {linkid: 'hg', body: 'FATED', jump: '5pccFMxiUIMSg'}, {linkid: 'hg', body: 'FEAR of HEIGHTS', jump: '5pcxdyCFVxSAI'}, {linkid: 'hg', body: 'FERAL', jump: '5pcDZqNZsKEoM'}, {linkid: 'hg', body: 'FINICKY', jump: '5pcsfJomxXhJh'}, {linkid: 'hg', body: 'FLIRTY', jump: '5pcPnGprtHiWk'}, {linkid: 'hg', body: 'GLUTTON', jump: '5pcpPwrwvDqSB'}, {linkid: 'hg', body: 'GREEDY', jump: '5pcCgsOBwMQlI'}, {linkid: 'hg', body: 'HALF LIFE', jump: '5pcIpJnCZzhfU'}, {linkid: 'hg', body: 'HAUNTED', jump: '5pcHwXyDqzXRK'}, {linkid: 'hg', body: 'HEMOPHILIC', jump: '5pchQnGJCXKLX'}, {linkid: 'hg', body: 'HUMORLESS', jump: '5pcKUKeLWAlJs'}, {linkid: 'hg', body: 'HYPEROPIA', jump: '5pcawZGzxunpD'}, {linkid: 'hg', body: 'IDIOT SAVANT', jump: '5pcDYPSNkxdee'}, {linkid: 'hg', body: 'IMMATURE', jump: '5pcqAlGRNWipj'}, {linkid: 'hg', body: 'IMPATIENT', jump: '5pckMbcImhUcG'}, {linkid: 'hg', body: 'IMPIOUS', jump: '5pcpArTOjDwzD'}, {linkid: 'hg', body: 'IMPISH', jump: '5pcpsjsJUuzSn'}, {linkid: 'hg', body: 'IMPOTENT', jump: '5pcqNPCwOLLTG'}, {linkid: 'hg', body: 'INBRED', jump: '5pcstwrsDDwxF'}, {linkid: 'hg', body: 'INFIRM', jump: '5pcQAjkRoqyhT'}, {linkid: 'hg', body: 'INSOMNIAC', jump: '5pcTsmimhzueg'}, {linkid: 'hg', body: 'INTOLERANT', jump: '5pcqFVDSPFBje'}, {linkid: 'hg', body: 'KLUTZ', jump: '5pccLTdLXzwUt'}, {linkid: 'hg', body: 'LAZY', jump: '5pcUwpJfdApBZ'}, {linkid: 'hg', body: 'LIAR', jump: '5pcbXnXdqpCEL'}, {linkid: 'hg', body: 'LIMP', jump: '5pcxVoTvBrloY'}, {linkid: 'hg', body: 'MANIPULATIVE', jump: '5pcFqTUIEqlFG'}, {linkid: 'hg', body: 'MASOCHIST', jump: '5pcadipbvQzvo'}, {linkid: 'hg', body: 'MEGALOMANIAC', jump: '5pcErNYHgbGYr'}, {linkid: 'hg', body: 'MISSING ARM', jump: '5pchqEIjLqtIR'}, {linkid: 'hg', body: 'MISSING DIGIT', jump: '5pcaMWbgAtChp'}, {linkid: 'hg', body: 'MISSING EAR', jump: '5pcCPNXEQCtEs'}, {linkid: 'hg', body: 'MISSING EYE', jump: '5pcCXMkaDdzmw'}, {linkid: 'hg', body: 'MONOTHEIST', jump: '5pchamlaBbEvl'}, {linkid: 'hg', body: 'MULE', jump: '5pcxPNOOMRVMx'}, {linkid: 'hg', body: 'MUTE', jump: '5pcFXbbSKyUoZ'}, {linkid: 'hg', body: 'MYOPIA', jump: '5pcRVOUqAzIDJ'}, {linkid: 'hg', body: 'NATIONALIST', jump: '5pcmMyirdXlej'}, {linkid: 'hg', body: 'NERVOUS', jump: '5pczTPsReSRZo'}, {linkid: 'hg', body: 'NO DEPTH PERCEPTION', jump: '5pcCrVJJSrkII'}, {linkid: 'hg', body: 'OBSESSIVE', jump: '5pcdQTbmFxltU'}, {linkid: 'hg', body: 'OPUSPHOBIA', jump: '5pcczYowEngrl'}, {linkid: 'hg', body: 'ORPHAN', jump: '5pcLRrTtzfZfg'}, {linkid: 'hg', body: 'OVERCOFIDENT', jump: '5pcPVPRyOJpKV'}, {linkid: 'hg', body: 'PACIFIST', jump: '5pchnIwlJXjLB'}, {linkid: 'hg', body: 'PARANOID', jump: '5pctvwqKGIafO'}, {linkid: 'hg', body: 'PASSIONLESS', jump: '5pcnOHtwSapah'}, {linkid: 'hg', body: 'POOR', jump: '5pcFvaltYStRX'}, {linkid: 'hg', body: 'PERFECTIONIST', jump: '5pcTDwAmgQEFt'}, {linkid: 'hg', body: 'PHOBIC', jump: '5pcxmNyVGWvGH'}, {linkid: 'hg', body: 'PROUD', jump: '5pcDVoCPYyIVI'}, {linkid: 'hg', body: 'PROVINCIAL', jump: '5pcjtttWASOcc'}, {linkid: 'hg', body: 'REFUGEE', jump: '5pcrsKDQZVaOk'}, {linkid: 'hg', body: 'REMORSELESS', jump: '5pcNPrQibpMYO'}, {linkid: 'hg', body: 'SADIST', jump: '5pctQwVdKalFR'}, {linkid: 'hg', body: 'SECRET IDENTITY', jump: '5pcQonWxsncxT'}, {linkid: 'hg', body: 'SELF MARTYR', jump: '5pcabgjZSvhSL'}, {linkid: 'hg', body: 'SELF-RIGHTEOUS', jump: '5pcwAyrbsxCur'}, {linkid: 'hg', body: 'SENSITIVE', jump: '5pcPgjqgYEPdR'}, {linkid: 'hg', body: 'SENSITIVE HEARING', jump: '5pczXAKAVwrDR'}, {linkid: 'hg', body: 'SHALLOW', jump: '5pcAZBVhWeJjs'}, {linkid: 'hg', body: 'SHAKY HANDS', jump: '5pcwwTwPpoDpA'}, {linkid: 'hg', body: 'SLOW WITTED', jump: '5pcYGQrIjkuKB'}, {linkid: 'hg', body: 'SMART ASS', jump: '5pcWDANmSjPhq'}, {linkid: 'hg', body: 'SPITELESS', jump: '5pcZXKEXyJjul'}, {linkid: 'hg', body: 'SQUEAMISH', jump: '5pcErPZGZCMTI'}, {linkid: 'hg', body: 'STUBBORN', jump: '5pcCvRZVhdhMT'}, {linkid: 'hg', body: 'STUTTER', jump: '5pcUHTwLuHIYx'}, {linkid: 'hg', body: 'SUPERSTITIOUS', jump: '5pcCOLiuoxWbq'}, {linkid: 'hg', body: 'TALKER', jump: '5pcuMMDAuzHCG'}, {linkid: 'hg', body: 'THEATRICAL', jump: '5pcjAoEEsASLx'}, {linkid: 'hg', body: 'THRALL', jump: '5pcJUdjTUvrSx'}, {linkid: 'hg', body: 'TIMID', jump: '5pcKPcIedhMpJ'}, {linkid: 'hg', body: 'VAIN', jump: '5pcIyesYGTeSG'}, {linkid: 'hg', body: 'VOW of POVERTY', jump: '5pcaqnyWsXtRJ'}, {linkid: 'hg', body: 'WEAK', jump: '5pcqNjgKyIGeA'}, {linkid: 'hg', body: 'WITHDRAWN', jump: '5pcUwpxgCOQgW'}]   };

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
