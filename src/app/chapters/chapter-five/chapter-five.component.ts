import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapter-five',
  templateUrl: './chapter-five.component.html',
  styleUrls: ['./chapter-five.component.css']
})
export class ChapterFiveComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService
  ) { }

  chapterName = '';
  side =[{linkid: 'hnu', body: 'BENEFITS & PENALTIES', jump: 'flawbenefitsandb'}, {linkid: 'h', body: 'GAINING FLAWS', jump: 'gainflaws'}, {linkid: 'hg', body: 'ROLLING FLAWS', jump: '5hIXwDXuAzcG'}, {linkid: 'hg', body: 'CHERRY PICKING', jump: '5hezytjuhmmr'}, {linkid: 'h', body: 'FLAW DESCRIPTIONS', jump: '5hRAntvjfNde'}, {linkid: 'hg', body: 'ADDICT', jump: '5pcZzvNmKsLVc'}, {linkid: 'hg', body: 'ATHEIST', jump: '5pcEiCcoauPxi'}, {linkid: 'hg', body: 'BLIND, TOTAL', jump: '5pcJRhrfsTnFE'}, {linkid: 'hg', body: 'BOAR FACED', jump: '5pczyhJtqiogI'}, {linkid: 'hg', body: 'DARK SECRET', jump: '5pcQzUFNWbIfp'}, {linkid: 'hg', body: 'DEBTOR', jump: '5pcHMwNxFwWBB'}, {linkid: 'hg', body: 'DERANGED', jump: '5pcSvoMVcLrro'}, {linkid: 'hg', body: 'EPILEPTIC', jump: '5pcAaoniYEXSF'}, {linkid: 'hg', body: 'EXCOMMUNICATED', jump: '5pcfHvrrHiUcJ'}, {linkid: 'hg', body: 'FATED', jump: '5pccFMxiUIMSg'}, {linkid: 'hg', body: 'FERAL', jump: '5pcDZqNZsKEoM'}, {linkid: 'hg', body: 'HALF LIFE', jump: '5pcIpJnCZzhfU'}, {linkid: 'hg', body: 'HAUNTED', jump: '5pcHwXyDqzXRK'}, {linkid: 'hg', body: 'HEMOPHILIC', jump: '5pchQnGJCXKLX'}, {linkid: 'hg', body: 'IDIOT SAVANT', jump: '5pcDYPSNkxdee'}, {linkid: 'hg', body: 'IMPISH', jump: '5pcpsjsJUuzSn'}, {linkid: 'hg', body: 'IMPOTENT', jump: '5pcqNPCwOLLTG'}, {linkid: 'hg', body: 'INBRED', jump: '5pcstwrsDDwxF'}, {linkid: 'hg', body: 'LIMP', jump: '5pcxVoTvBrloY'}, {linkid: 'hg', body: 'MISSING ARM', jump: '5pchqEIjLqtIR'}, {linkid: 'hg', body: 'MISSING EAR', jump: '5pcCPNXEQCtEs'}, {linkid: 'hg', body: 'MISSING EYE', jump: '5pcCXMkaDdzmw'}, {linkid: 'hg', body: 'MONOTHEIST', jump: '5pchamlaBbEvl'}, {linkid: 'hg', body: 'MULE', jump: '5pcxPNOOMRVMx'}, {linkid: 'hg', body: 'NO DEPTH PERCEPTION', jump: '5pcCrVJJSrkII'}, {linkid: 'hg', body: 'OPUSPHOBIA', jump: '5pcczYowEngrl'}, {linkid: 'hg', body: 'PASSIONLESS', jump: '5pcnOHtwSapah'}, {linkid: 'hg', body: 'POOR', jump: '5pcFvaltYStRX'}, {linkid: 'hg', body: 'PHOBIC', jump: '5pcxmNyVGWvGH'}, {linkid: 'hg', body: 'REFUGEE', jump: '5pcrsKDQZVaOk'}, {linkid: 'hg', body: 'SECRET IDENTITY', jump: '5pcQonWxsncxT'}, {linkid: 'hg', body: 'SELF MARTYR', jump: '5pcabgjZSvhSL'}, {linkid: 'hg', body: 'SENSITIVE', jump: '5pcPgjqgYEPdR'}, {linkid: 'hg', body: 'SENSITIVE HEARING', jump: '5pczXAKAVwrDR'}, {linkid: 'hg', body: 'TALKER', jump: '5pcuMMDAuzHCG'}, {linkid: 'hg', body: 'THRALL', jump: '5pcJUdjTUvrSx'}, {linkid: 'hg', body: 'VOW OF POVERTY', jump: '5pcaqnyWsXtRJ'}]

  ngOnInit(){}

  ngOnDestroy() {  
    this.chapterName = ''
  }

   
}
