import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rr-one',
  templateUrl: './rr-one.component.html',
  styleUrls: ['./rr-one.component.css', '../../../chapter.css']
})
export class RrOneComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'When to Make Checks', jump: 'WhentoMakeCheader'}, {linkid: 'hg', body: 'When to Roll Dice', jump: 'WhentoRollDheader'}, {linkid: 'hg', body: 'What Do Those Dice Mean?', jump: 'WhatDoThoseheader'}, {linkid: 'hg', body: 'Structure Overview', jump: 'structureovioerjih'}, {linkid: 'h', body: 'Making Checks', jump: 'MakingChecksheader'}, {linkid: 'hg', body: 'Untrained Skill Suites', jump: 'UntrainedSkilheader'}, {linkid: 'hg', body: 'Check Modifiers', jump: 'CheckModifierheader'}, {linkid: 'hg', body: 'Rank', jump: 'Rankheader'}, {linkid: 'hg', body: 'Exploding Dice', jump: 'ExplodingDiceheader'}, {linkid: 'h', body: 'Stress', jump: 'Stressheader'}, {linkid: 'hg', body: 'Stress Penalties', jump: 'StressPenaltiheader'}, {linkid: 'hg', body: 'Healing Stress', jump: 'HealingStressheader'}, {linkid: 'hg', body: 'Mental Breakdowns', jump: 'MentalBreakdoheader'}, {linkid: 'h', body: 'Vitality', jump: 'Vitalityheader'}, {linkid: 'hg', body: 'Physical States', jump: 'PhysicalStateheader'}, {linkid: 'hg', body: 'Fatigue Threshold', jump: 'Fatigueheader'}, {linkid: 'hg', body: 'Beyond Critical', jump: 'BeyondCriticaheader'}, {linkid: 'hg', body: 'Healing Damage', jump: 'HealingDamageheader'}, {linkid: 'h', body: 'Fallen Comrades', jump: 'FallenComradeheader'}, {linkid: 'h', body: 'Taking a Breather', jump: 'TakingaBreatheader'}, {linkid: 'h', body: 'Honor', jump: 'Honorheader'}, {linkid: 'hg', body: 'Categories & Bonuses', jump: 'CategoriesBheader'}, {linkid: 'hg', body: 'Honor Dice', jump: 'honordicoeheader'}]
  ngOnInit() {
  }

}
