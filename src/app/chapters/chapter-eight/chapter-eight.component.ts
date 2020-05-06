import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';

@Component({
  selector: 'app-chapter-eight',
  templateUrl: './chapter-eight.component.html',
  styleUrls: ['./chapter-eight.component.css']
})
export class ChapterEightComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
  ) { }

  chapterName = '';
  side = [{linkid: 'h', body: 'SKILL INTRODUCTION', jump: '8hjKMpLZrmva'}, {linkid: 'hg', body: 'ACQUIRING SKILLS', jump: '8hZLxLyRaXkr'}, {linkid: 'hg', body: 'CALCULATING RANK', jump: '8hDzWWdfGtEh'}, {linkid: 'h', body: 'THE BASICS (SKILL CHECKS)', jump: 'TheBasicsSkheader'}, {linkid: 'hg', body: 'ORDER OF OPERATIONS OF A CHECK', jump: 'ORDEROFOPERAPnqxHTQbXf'}, {linkid: 'h', body: 'SKILL CHALLENGES', jump: 'SkillChallengheader'}, {linkid: 'hg', body: 'PACE & BASE TIME', jump: 'tempoandbasetime'}, {linkid: 'hg', body: 'CLOCKS, FAILURES & SUCCESSES', jump: 'TIMEYOURGREqBcOBuMQDR'}, {linkid: 'hg', body: 'CLOCKS STATES & OPPOSITION', jump: 'FAILINGASKILlfgJFeEEBc'}, {linkid: 'h', body: 'TOOLS AT YOUR DISPOSAL', jump: 'ToolsAtYourheader'}, {linkid: 'hg', body: 'FACTOR DICE', jump: 'dactordicejfje'}, {linkid: 'hg', body: 'TAKING YOUR TIME', jump: 'TAKINGYOURTIXbTUfUXNlY'}, {linkid: 'hg', body: 'RUSH JOB', jump: 'rushjobsheading'}, {linkid: 'hg', body: 'PREP CHECKS', jump: 'PREPCHECKSjarBjZitkA'}, {linkid: 'hg', body: 'ASSETS', jump: 'ASSETSuOCwqAKtuj'}, {linkid: 'hg', body: 'STRESSING', jump: 'STRESSINGtkwuUmtSvj'}, {linkid: 'hg', body: 'EQUIPMENT', jump: 'EQUIPMENTZKUUKdyIBF'}, {linkid: 'hg', body: 'COMPANIONS', jump: 'COMPANIONShkErztFZmk'}, {linkid: 'h', body: 'SKILL DESCRIPTIONS', jump: '8hpQcRATNVSD'}, {linkid: 'hg', body: 'ATHLETICS SKILL SUITE', jump: '8hgCWoYDVNAky'}, {linkid: 'hg', body: 'LORE SKILL SUITE', jump: '8hgUsbDvupaWu'}, {linkid: 'hg', body: 'STREETWISE SKILL SUITE', jump: '8hgmrjZpqPkpp'}, {linkid: 'hg', body: 'SURVIVAL SKILL SUITE', jump: '8hgdxmAtpfWqx'}, {linkid: 'hg', body: 'TACTIC SKILL SUITE', jump: '8hgrNxupSJGty'}, {linkid: 'hg', body: 'TRADES SKILL SUITE', jump: '8hgSzmUTeHLiA'}]

  ngOnInit() { }

  ngOnDestroy() {
    this.chapterName = ''
  }
}
