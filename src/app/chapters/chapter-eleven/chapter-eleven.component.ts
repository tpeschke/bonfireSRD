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
  side = [{ linkid: 'hnu', body: 'Encumbrance', jump: '11hlkpDcuULVK' }, { linkid: 'hnu', body: 'Currency', jump: '11hcDVoyyzNfA' }, { linkid: 'hnu', body: 'Buying At 1st Level', jump: '11hUoyrMZmTap' }, { linkid: 'h', body: 'Wear', jump: 'wearheading' }, {linkid: "hg", body: "REPAIRING EQUIPMENT", jump: "rpaeiaringeuqiop"}, { linkid: 'hnu', body: 'Table Header Explanations', jump: '11hQtxvaXVpRm' }, { linkid: 'h', body: 'Equipment Prices', jump: '11t1' }, { linkid: 'hg', body: 'Armor', jump: '11t21' }, { linkid: 'h', body: 'Armor Stats', jump: '11hgKBqkCxSAI' }, { linkid: 'hg', body: 'ARMOR BONUSES', jump: '11hxJgcyHTTRc' },{ linkid: 'hg', body: 'Beverages', jump: '11t8' }, { linkid: 'hg', body: 'Clothing', jump: '11t2' }, { linkid: 'hg', body: 'Containers Personal', jump: '11t4' }, {linkid: 'hg', body: 'Goods, Adventuring', jump: 'adventuringtable'},  {linkid: 'hg', body: 'Hirelings', jump: 'hirelingstats'}, { linkid: 'hg', body: 'Services', jump: '11t6' },  { linkid: 'hg', body: 'Shields', jump: '11t22' }, { linkid: 'h', body: 'Shield Stats', jump: '11hyyTygqlCvx' }, { linkid: 'hg', body: 'SHIELD BONUSES', jump: '11hiFfWgYkSiH' }, { linkid: 'hg', body: 'Substances Rope and Fabrics', jump: '11t18' }, { linkid: 'hg', body: 'Weapons, Axes', jump: '11t25' },{ linkid: 'hg', body: 'Weapons, Polearms', jump: '11t27' },{ linkid: 'hg', body: 'Weapons, Sidearms', jump: '11t24' }, { linkid: 'hg', body: 'Weapons, Swords', jump: '11t23' }, { linkid: 'hg', body: 'Weapons, Trauma', jump: '11t26' }, { linkid: 'h', body: 'Melee Weapon Stats', jump: '11hOUgQlIPWxE' },  { linkid: 'hg', body: 'WEAPON BONUSES', jump: '11hXItIqSyOQf' }, { linkid: 'hg', body: 'Weapons, Ranged Weapons', jump: '11t29' },{ linkid: 'hg', body: 'Weapons, Ranged Munitions', jump: '11t20' }, { linkid: 'h', body: 'Ranged Weapon Stats', jump: '11t31' }]

  ngOnInit() {
  }

  ngOnDestroy() {
    this.chapterName = ''
  }

}
