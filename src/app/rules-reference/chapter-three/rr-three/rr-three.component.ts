import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rr-three',
  templateUrl: './rr-three.component.html',
  styleUrls: ['./rr-three.component.css', '../../../chapter.css']
})
export class RrThreeComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'Introduction', jump: 'Introductionheader'}, {linkid: 'h', body: 'Starting a Combat', jump: 'StartingaComheader'}, {linkid: 'hg', body: 'The Clock', jump: 'TheClockheader'}, {linkid: 'hg', body: 'Starting Initiative & Surprise', jump: 'StartingInitiheader'}, {linkid: 'h', body: 'Combat Basics', jump: 'CombatBasicsheader'}, {linkid: 'hg', body: 'Taking Actions', jump: 'TakingActionsheader'}, {linkid: 'hg', body: 'Movement', jump: 'Movementheader'}, {linkid: 'hg', body: 'Zones of Engagement', jump: 'ZonesofEngagheader'}, {linkid: 'h', body: 'Melee Combat', jump: 'MeleeCombatheader'}, {linkid: 'hg', body: 'Melee Attack & Defense', jump: 'MeleeAttackheader'}, {linkid: 'hg', body: 'Perfect Attacks & Defenses', jump: 'PerfectAttackheader'}, {linkid: 'hg', body: 'Dealing Damage', jump: 'DealingDamageheader'}, {linkid: 'hg', body: 'Breakage', jump: 'Breakageheader'}, {linkid: 'hg', body: 'Knock-Backs', jump: 'KnockBacksheader'}, {linkid: 'h', body: 'Ranged Combat', jump: 'RangeCombatheader'}, {linkid: 'hg', body: 'Ranged Attack & Defense', jump: 'RangedAttackheader'}, {linkid: 'hg', body: 'Cover', jump: 'Coverheader'}, {linkid: 'hg', body: 'Firing Into Melee', jump: 'FiringIntoMeheader'}, {linkid: 'hg', body: 'Dealing Damage', jump: 'DealingDamageheader'}, {linkid: 'hg', body: 'Ranged Misses', jump: 'RangedMissesheader'}, {linkid: 'h', body: 'Misc. Combat Rules', jump: 'MiscCombatRheader'}, {linkid: 'hg', body: 'Facing & Fighting Multiple People', jump: 'FacingFightheader'}, {linkid: 'hg', body: 'Trauma', jump: 'Traumaheader'}, {linkid: 'hg', body: 'Coup De Grace', jump: 'CoupDeGraceheader'}, {linkid: 'h', body: 'Strategies', jump: 'Strategiesheader'}, {linkid: 'hg', body: 'Active Dodging', jump: 'ActiveDodgingheader'}, {linkid: 'hg', body: 'Careful Aiming', jump: 'CarefulAimingheader'}, {linkid: 'hg', body: 'Choking Up on Your Weapon', jump: 'ChokingUponheader'}, {linkid: 'hg', body: 'Feint', jump: 'Feintheader'}, {linkid: 'hg', body: 'Fend Off', jump: 'FendOffheader'}, {linkid: 'hg', body: 'In Their Guard', jump: 'InTheirGuardheader'}, {linkid: 'hg', body: 'Jab', jump: 'Jabheader'}, {linkid: 'hg', body: 'Power Attack', jump: 'PowerAttackheader'}, {linkid: 'hg', body: 'Retreat', jump: 'Retreatheader'}, {linkid: 'hg', body: 'Shift', jump: 'Shiftheader'}, {linkid: 'hg', body: 'Step Back', jump: 'StepBackheader'}, {linkid: 'h', body: 'Ending Combat', jump: 'EndingCombatheader'}]
  ngOnInit() {
  }

}
