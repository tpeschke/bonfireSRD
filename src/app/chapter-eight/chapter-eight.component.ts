import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../chapter.service';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-chapter-eight',
  templateUrl: './chapter-eight.component.html',
  styleUrls: ['./chapter-eight.component.css']
})
export class ChapterEightComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private notRedux: NotReduxService
  ) { }

  navDisplay = false;
  chapterName = '';
  side = { height: {'height': '13012px'}, side: [{ linkid: 'h', body: 'Athletics Skill Suite', jump: '8hgCWoYDVNAky' }, { linkid: 'hg', body: 'Acrobatics', jump: '8paJNWDXMSUF' }, { linkid: 'hg', body: 'Climbing' , jump: '8pFpwyzPtwUs'}, { linkid: 'hg', body: 'Disarm Trap' , jump: '8pGatdMZjeHN'}, { linkid: 'hg', body: 'Endurance' , jump: 'endurance'}, { linkid: 'hg', body: 'Escape Artist' , jump: '8pKDXCAPUGRg'}, { linkid: 'hg', body: 'Jumping' , jump: '8pjPtFrALTsA'}, { linkid: 'hg', body: 'Sport (specific)' , jump: '8pBWZQMorOxq'}, { linkid: 'hg', body: 'Stealth' , jump: '8pufnPywySnd'}, { linkid: 'hg', body: 'Swimming' , jump: '8pgOEpxtEOss'}, { linkid: 'h', body: 'Lore Skill Suite' , jump: '8hgUsbDvupaWu'}, { linkid: 'hg', body: 'Administration' , jump: '8pgvbYfCWmTL'}, { linkid: 'hg', body: 'Arcana' , jump: '8pYRbJaJGNIv'}, { linkid: 'hg', body: 'History' , jump: '8pcscqQZeLXl'}, { linkid: 'hg', body: 'Language (specific)' , jump: '8pUzMZnwVaSp'}, { linkid: 'hg', body: 'Law (culture)' , jump: '8pAJUZbDSxbn'}, { linkid: 'hg', body: 'Literacy (language)' , jump: '8pYPzLusOSAQ'}, { linkid: 'hg', body: 'Mathematics' , jump: '8phrBPZpgsHS'}, { linkid: 'hg', body: 'Medicine' , jump: '8pDGuRiNJTtz'}, { linkid: 'hg', body: 'Monster Craft' , jump: '8pzwOoMtFEEv'}, { linkid: 'hg', body: 'Nature' , jump: '8pyKxDhyhEqj'}, { linkid: 'hg', body: 'Religion (cult)' , jump: '8poEHUYEVKuj'}, { linkid: 'h', body: 'Streetwise Skill Suite' , jump: '8hgmrjZpqPkpp'}, { linkid: 'hg', body: 'Current Affairs' , jump: '8phuagtlzIPR'}, { linkid: 'hg', body: 'Deception' , jump: '8ppTMBhwWGgp'}, { linkid: 'hg', body: 'Forgery' , jump: '8pMXxRtNvSfJ'}, { linkid: 'hg', body: 'Gambling/Gaming' , jump: '8pNOTUQHOoEj'}, { linkid: 'hg', body: 'Intuition' , jump: '8pvcTNToWFwp'}, { linkid: 'hg', body: 'Listening' , jump: '8pLyZcgSArlx'}, { linkid: 'hg', body: 'Lock Picking' , jump: '8pQptXhcmiTM'}, { linkid: 'hg', body: 'Perception' , jump: '8pcUsELVcIuD'}, { linkid: 'hg', body: 'Sleight of Hand' , jump: '8pmHUufiBvao'}, { linkid: 'hg', body: 'Trap Finding' , jump: '8pHNTiYqTHvJ'}, { linkid: 'h', body: 'Survival Skill Suite' , jump: '8hgdxmAtpfWqx'}, { linkid: 'hg', body: 'Botany' , jump: '8pGeNoRuxChK'}, { linkid: 'hg', body: 'Camouflage' , jump: '8pnBFCKarvuT'}, { linkid: 'hg', body: 'Fire Building' , jump: '8pnpCpSCikdw'}, { linkid: 'hg', body: 'First Aid' , jump: '8pIcChEhwhnv'}, { linkid: 'hg', body: 'Handle Animal (specific)' , jump: '8pflywaAagQe'}, { linkid: 'hg', body: 'Hiding' , jump: '8pdXAiNkkbwe'}, { linkid: 'hg', body: 'Monster Craft' , jump: '8pkwdtmQmoFj'}, { linkid: 'hg', body: 'Navigation' , jump: '8pyNaLtMYpmU'}, { linkid: 'hg', body: 'Scavenging' , jump: '8pAGSNXbwRwD'}, { linkid: 'hg', body: 'Snaring' , jump: '8pWMGGxDjWMw'}, { linkid: 'hg', body: 'Tracking' , jump: '8puIHzbCOxjP'}, { linkid: 'hg', body: 'Use Rope' , jump: '8pGQIfkPAQUp'}, { linkid: 'h', body: 'Tactics Skill Suite' , jump: '8hgrNxupSJGty'}, { linkid: 'hg', body: 'Combat Style (style)' , jump: '8plqrGiFJllf'}, { linkid: 'hg', body: 'Distraction' , jump: '8puGJNiozbkv'}, { linkid: 'hg', body: 'Leadership' , jump: '8pvhfQcUBgpE'}, { linkid: 'hg', body: 'Quarter Mastering' , jump: '8pkPNklzEhSX'}, { linkid: 'hg', body: 'Rally' , jump: '8pbXSnzZwexQ'}, { linkid: 'hg', body: 'Recruiting' , jump: '8pvjMdNjJHcN'}, { linkid: 'hg', body: 'Riding' , jump: '8pNEIvXPrjgI'}, { linkid: 'hg', body: 'Signalling' , jump: '8pKNPkWewvBL'}, { linkid: 'hg', body: 'Warfare' , jump: '8ptcgyuJPnMc'}, { linkid: 'h', body: 'Trades Skill Suite' , jump: '8hgSzmUTeHLiA'}, { linkid: 'hg', body: 'Appraisal (specific)' , jump: '8peZdZBQtSLM'}, { linkid: 'hg', body: 'Artistry (specific)' , jump: '8plLCBmmcXNr'}, { linkid: 'hg', body: 'Cooking/Baking' , jump: '8pvqzQCQBofY'}, { linkid: 'hg', body: 'Craft (specific)' , jump: '8pqjeMdjDFWL'}, { linkid: 'hg', body: 'Leatherworking' , jump: '8pnFOYxnQizX'}, { linkid: 'hg', body: 'Maintaince' , jump: '8pBliuUfdJVS'}, { linkid: 'hg', body: 'Metalworking' , jump: '8pJBDgpNPNpn'}, { linkid: 'hg', body: 'Musician (specific)' , jump: '8pdNSWiVHkMk'}, { linkid: 'hg', body: 'Performance' , jump: '8pBGNVdVxGYg'}, { linkid: 'hg', body: 'Persuasion', jump: '8pjHETCpoIZs' }] };

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
