import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rr-three-deluxe',
  templateUrl: './rr-three-deluxe.component.html',
  styleUrls: ['./rr-three-deluxe.component.css', '../../../chapter.css']
})
export class RrThreeDeluxeComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'Introduction', jump: 'Introductionheader'}, {linkid: 'h', body: 'Starting a Combat', jump: 'StartingaComheader'}, {linkid: 'hg', body: 'The Clock', jump: 'TheClockheader'}, {linkid: 'hg', body: 'Initiative', jump: 'StartingInitiheader'}, {linkid: 'h', body: 'Combat Basics', jump: 'CombatBasicsheader'}, {linkid: 'hg', body: 'Taking Actions', jump: 'TakingActionsheader'}, {linkid: 'hg', body: 'Movement', jump: 'Movementheader'}, {linkid: 'hg', body: 'Improvised Weapons', jump: 'ImprovisedWeaheader'}, {linkid: 'hg', body: 'Weapon Styles', jump: 'WeaponStylesheader'}, {linkid: 'hg', body: 'Zones of Engagement', jump: 'ZonesofEngagheader'}, {linkid: 'h', body: 'Melee Combat', jump: 'MeleeCombatheader'}, {linkid: 'hg', body: 'Melee Attack & Defense', jump: 'MeleeAttackheader'}, {linkid: 'hg', body: 'Perfect Attacks & Defenses', jump: 'PerfectAttackheader'}, {linkid: 'hg', body: 'Dealing Damage', jump: 'DealingDamageheader'}, {linkid: 'hg', body: 'Breakage', jump: 'Breakageheader'}, {linkid: 'hg', body: 'Knock-Backs', jump: 'KnockBacksheader'}, {linkid: 'hg', body: 'Attacking & Defending on the Move', jump: 'attackadniofeijwo'}, {linkid: 'h', body: 'Ranged Combat', jump: 'RangeCombatheader'}, {linkid: 'hg', body: 'Ranged Weapon Firing Break Down', jump: 'RangedWeaponbreakingheader'}, {linkid: 'hg', body: 'Ranged Attack & Defense', jump: 'RangedAttackheader'}, {linkid: 'hg', body: 'Cover', jump: 'Coverheader'}, {linkid: 'hg', body: 'Firing Into Melee', jump: 'FiringIntoMeheader'}, {linkid: 'hg', body: 'Shooting on the Move', jump: 'shootinoniogjiofew'}, {linkid: 'hg', body: 'Dealing Damage', jump: 'DealingDamageheader'}, {linkid: 'hg', body: 'Ranged Misses', jump: 'RangedMissesheader'}, {linkid: 'h', body: 'Misc. Combat Rules', jump: 'MiscCombatRheader'}, {linkid: 'hg', body: 'Facing & Fighting Multiple People', jump: 'FacingFightheader'}, {linkid: 'hg', body: 'Trauma', jump: 'Traumaheader'}, {linkid: 'hg', body: 'Coup De Grace', jump: 'CoupDeGraceheader'}, {linkid: 'hg', body: 'Equipment', jump: 'Equipmentheadercombat'}, {linkid: 'hg', body: 'Terrain & Situational Modifiers', jump: 'TerrainSituheader'}, {linkid: 'h', body: 'Tactics', jump: 'Strategiesheader'}, {linkid: 'hg', body: 'Active Dodging', jump: 'ActiveDodgingheaderVfzhvgCSJB'}, {linkid: 'hg', body: 'Brace Yourself', jump: 'BraceYourselfheaderToGyImDPir'}, {linkid: 'hg', body: 'Called Shot', jump: 'CalledShotheadertEgAylqFna'}, {linkid: 'hg', body: 'Careful Aiming', jump: 'CarefulAimingheaderlImRvWoVTO'}, {linkid: 'hg', body: 'Charge', jump: 'ChargeheadermCsxwywIGD'}, {linkid: 'hg', body: 'Choking Up On Your Weapon', jump: 'ChokingUponheaderwWdGVbfNdn'}, {linkid: 'hg', body: 'Feint', jump: 'FeintheaderqTimrAOdEs'}, {linkid: 'hg', body: 'Fend Off', jump: 'FendOffheaderTcUAPyXYbg'}, {linkid: 'hg', body: 'Flee', jump: 'FleeheaderUQOPzQSzSQ'}, {linkid: 'hg', body: 'Flurry Of Blows', jump: 'FlurryofBlowheadercLoGRuIFiJ'}, {linkid: 'hg', body: 'Hit The Deck', jump: 'HittheDeckheaderwVBSahDKFe'}, {linkid: 'hg', body: 'Hold Back', jump: 'HoldBackheaderjMSRlUdbpD'}, {linkid: 'hg', body: 'In Their Guard', jump: 'InTheirGuardheaderSDcEFhxeQN'}, {linkid: 'hg', body: 'Jab', jump: 'JabheaderLQxhmhWMPq'}, {linkid: 'hg', body: 'Long Guard', jump: 'LongGuardheaderhUUhxLrAiK'}, {linkid: 'hg', body: 'Phalanx Fighting', jump: 'PhalanxFightiheaderiSkmGYzuar'}, {linkid: 'hg', body: 'Power Attack', jump: 'PowerAttackheaderEXsIdEhccT'}, {linkid: 'hg', body: 'Shift', jump: 'ShiftheaderLPtyrVpYvk'}, {linkid: 'hg', body: 'Snap Shot', jump: 'snapshotheader'}, {linkid: 'hg', body: 'Step Back', jump: 'StepBackheaderPVXZzHDkhk'}, {linkid: 'h', body: 'Unarmed Combat', jump: 'UnarmedCombatheader'}, {linkid: 'hg', body: 'Grab', jump: 'Grabheader'}, {linkid: 'hg', body: 'Push', jump: 'Pushheader'}, {linkid: 'hg', body: 'Throw/Tackle', jump: 'ThrowTackleheader'}, {linkid: 'hg', body: 'Strike', jump: 'Strikeheader'}, {linkid: 'hg', body: 'Break Free', jump: 'BreakFreeheader'}, {linkid: 'h', body: 'Mounted Combat', jump: 'MountedCombatheader'}, {linkid: 'hg', body: 'Turning', jump: 'Turningheader'}, {linkid: 'hg', body: 'Acceleration/Deceleration', jump: 'AccelerationDheader'}, {linkid: 'hg', body: 'Doing Something Dangerous', jump: 'DoingSomethinheader'}, {linkid: 'hg', body: 'Rider Benefits', jump: 'RiderBenefitsheader'}, {linkid: 'hg', body: 'Rider Penalties', jump: 'RiderPenaltieheader'}, {linkid: 'h', body: 'Morale', jump: 'Moraleheader'}, {linkid: 'hg', body: 'Morale Confrontations', jump: 'MoraleConfronheader'}, {linkid: 'hg', body: 'With a Captain', jump: 'WithaCaptainheader'}, {linkid: 'hg', body: 'Vs a Side with No Captain', jump: 'VsaSidewithheader'}, {linkid: 'hg', body: 'Additional Arguments', jump: 'AdditionalArgheader'}, {linkid: 'hg', body: 'Confrontations within Morale Confrontations', jump: 'Confrontationsheader'}, {linkid: 'h', body: 'Ending Combat', jump: 'EndingCombatheader'}]

  ngOnInit() {
  }

}
