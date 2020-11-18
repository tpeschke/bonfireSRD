import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { ChapterService } from '../../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-eleven-advanced',
  templateUrl: './chapter-eleven-advanced.component.html',
  styleUrls: ['../chapter-eleven.component.css']
})
export class ChapterElevenAdvancedComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side = [{linkid: 'hnu', body: 'Encumbrance', jump: '11hlkpDcuULVK'}, {linkid: 'hnu', body: 'Currency', jump: '11hcDVoyyzNfA'}, {linkid: 'hnu', body: 'Buying At 1st Level', jump: '11hUoyrMZmTap'}, {linkid: 'hnu', body: 'War Gear', jump: '11qFMvfouHps'}, {linkid: 'hnu', body: 'Superior Equipment', jump: '11jJtZtvYlDt'}, {linkid: 'hnu', body: 'Table Header Explanations', jump: '11hQtxvaXVpRm'}, {linkid: 'h', body: 'Equipment Prices', jump: '11t1'}, { linkid: 'hg', body: 'Animals, Livestock & Pets', jump: '11t1'}, { linkid: 'hg', body: 'Animals, Mounts', jump: 'animalmountstable'}, {linkid: 'hg', body: 'Animal, Barding', jump: 'animalbardingprice'}, {linkid: 'hg', body: 'Animal, Barding Stats', jump: 'bardstatstable'}, { linkid: 'hg', body: 'Clothing', jump: '11t2' }, { linkid: 'hg', body: 'Clothing Accessories', jump: '11t3'}, { linkid: 'hg', body: 'Containers Heavy', jump: '11t5'}, { linkid: 'hg', body: 'Containers Personal', jump: '11t4' }, { linkid: 'hg', body: 'Fruits Vegatables and Nuts', jump: '11t7' }, { linkid: 'hg', body: 'Services', jump: '11t6' }, { linkid: 'hg', body: 'Spices', jump: '11t9' }, { linkid: 'hg', body: 'Beverages', jump: '11t8' }, { linkid: 'hg', body: 'Livestock Feed', jump: '11t10' }, { linkid: 'hg', body: 'Meat', jump: '11t11' }, { linkid: 'hg', body: 'Rations and Ingredients', jump: '11t12' }, { linkid: 'hg', body: 'Substances Alchemical', jump: '11t13' }, { linkid: 'hg', body: 'Poisons and Toxins', jump: '11t14' }, { linkid: 'hg', body: 'Substances Animal Products', jump: '11t16' }, { linkid: 'hg', body: 'Substances Metal Ore', jump: '11t17' }, { linkid: 'hg', body: 'Substances Rope and Fabrics', jump: '11t18' }, { linkid: 'hg', body: 'Tools', jump: '11t19' }, { linkid: 'hg', body: 'Ranged Munitions', jump: '11t20' }, { linkid: 'hg', body: 'Armor', jump: '11t21' }, { linkid: 'hg', body: 'Shields', jump: '11t22' }, { linkid: 'hg', body: 'Swords', jump: '11t23' }, { linkid: 'hg', body: 'Sidearms', jump: '11t24' }, { linkid: 'hg', body: 'Axes', jump: '11t25' }, { linkid: 'hg', body: 'Trauma', jump: '11t26' }, { linkid: 'hg', body: 'Polearms', jump: '11t27' }, { linkid: 'hg', body: 'Thrown Weapons', jump: '11t28' }, { linkid: 'hg', body: 'Ranged Weapons', jump: '11t29' }, { linkid: 'hnu', body: 'Melee Weapon Stats', jump: '11t30' }, { linkid: 'h', body: 'Ranged Weapon Stats', jump: '11t31' }, {linkid: 'hg', body: 'WEAPON TABLE HEADER EXPLANATION', jump: '11hOUgQlIPWxE'}, {linkid: 'hg', body: 'WEAPON BONUSES', jump: '11hXItIqSyOQf'}, { linkid: 'h', body: 'Armor Stats', jump: '11t32' }, {linkid: 'hg', body: 'ARMOR TABLE HEADER EXPLANATION', jump: '11hgKBqkCxSAI'}, {linkid: 'hg', body: 'ARMOR BONUSES', jump: '11hxJgcyHTTRc'}, { linkid: 'h', body: 'Shield Stats', jump: '11t33' }, {linkid: 'hg', body: 'SHIELD TABLE HEADER EXPLANATION', jump: '11hyyTygqlCvx'}, {linkid: 'hg', body: 'SHIELD BONUSES', jump: '11hiFfWgYkSiH'}] 
  ngOnInit() {}

  ngOnDestroy() {
    this.chapterName = ''
  }
}
