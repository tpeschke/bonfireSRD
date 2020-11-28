import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../not-redux.service';
import { ChapterService } from '../../chapter.service';
import { Router } from '@angular/router';
import tables from './tables'

@Component({
  selector: 'app-chapter-eleven',
  templateUrl: './chapter-eleven.component.html',
  styleUrls: ['./chapter-eleven.component.css']
})
export class ChapterElevenComponent implements OnInit {

  constructor(
    private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  tables = tables.tables;
  multi = tables.multipliers
  side = [{ linkid: 'hnu', body: 'Encumbrance', jump: '11hlkpDcuULVK' }, { linkid: 'hnu', body: 'Currency', jump: '11hcDVoyyzNfA' }, { linkid: 'hnu', body: 'Buying At 1st Level', jump: '11hUoyrMZmTap' }, { linkid: 'hnu', body: 'Table Header Explanations', jump: '11hQtxvaXVpRm' }, { linkid: 'h', body: 'Equipment Prices', jump: '11t1' }, { linkid: 'hg', body: 'Clothing', jump: '11t2' }, { linkid: 'hg', body: 'Containers Personal', jump: '11t4' }, { linkid: 'hg', body: 'Services', jump: '11t6' }, { linkid: 'hg', body: 'Beverages', jump: '11t8' }, { linkid: 'hg', body: 'Rations and Ingredients', jump: '11t12' }, { linkid: 'hg', body: 'Substances Rope and Fabrics', jump: '11t18' }, { linkid: 'hg', body: 'Tools', jump: '11t19' }, { linkid: 'hg', body: 'Ranged Munitions', jump: '11t20' }, { linkid: 'hg', body: 'Armor', jump: '11t21' }, { linkid: 'hg', body: 'Shields', jump: '11t22' }, { linkid: 'hg', body: 'Swords', jump: '11t23' }, { linkid: 'hg', body: 'Sidearms', jump: '11t24' }, { linkid: 'hg', body: 'Axes', jump: '11t25' }, { linkid: 'hg', body: 'Trauma', jump: '11t26' }, { linkid: 'hg', body: 'Polearms', jump: '11t27' }, { linkid: 'hg', body: 'Thrown Weapons', jump: '11t28' }, { linkid: 'hg', body: 'Ranged Weapons', jump: '11t29' }, { linkid: 'hnu', body: 'Melee Weapon Stats', jump: '11t30' }, { linkid: 'h', body: 'Ranged Weapon Stats', jump: '11t31' }, { linkid: 'hg', body: 'WEAPON TABLE HEADER EXPLANATION', jump: '11hOUgQlIPWxE' }, { linkid: 'hg', body: 'WEAPON BONUSES', jump: '11hXItIqSyOQf' }, { linkid: 'h', body: 'Armor Stats', jump: '11t32' }, { linkid: 'hg', body: 'ARMOR TABLE HEADER EXPLANATION', jump: '11hgKBqkCxSAI' }, { linkid: 'hg', body: 'ARMOR BONUSES', jump: '11hxJgcyHTTRc' }, { linkid: 'h', body: 'Shield Stats', jump: '11t33' }, { linkid: 'hg', body: 'SHIELD TABLE HEADER EXPLANATION', jump: '11hyyTygqlCvx' }, { linkid: 'hg', body: 'SHIELD BONUSES', jump: '11hiFfWgYkSiH' }]

  ngOnInit() {
  }

  ngOnDestroy() {
    this.chapterName = ''
  }

}
