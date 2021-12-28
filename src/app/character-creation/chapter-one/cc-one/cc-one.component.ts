import { Component, OnInit } from '@angular/core';
import kits from './kit';

@Component({
  selector: 'app-cc-one',
  templateUrl: './cc-one.component.html',
  styleUrls: ['./cc-one.component.css', '../../../chapter.css']
})
export class CcOneComponent implements OnInit {

  constructor() { }

  public kits = kits
  side = [{linkid: 'h', body: 'Step 1: Roll Stats', jump: 'Step1RollSheader'}, {linkid: 'hg', body: 'Strength', jump: 'Strengthheader'}, {linkid: 'hg', body: 'Dexterity', jump: 'Dexterityheader'}, {linkid: 'hg', body: 'Constitution', jump: 'Constitutionheader'}, {linkid: 'hg', body: 'Intellect', jump: 'Intellectheader'}, {linkid: 'hg', body: 'Willpower', jump: 'Willpowerheader'}, {linkid: 'hg', body: 'Presence', jump: 'Presenceheader'}, {linkid: 'hg', body: 'A Note About Low Stats', jump: 'ANoteAboutLheader'}, {linkid: 'h', body: 'Step 2: Receive CrP', jump: 'Step2Receivheader'}, {linkid: 'h', body: 'Step 3: Select Race', jump: 'Step3Selectheader'}, {linkid: 'h', body: 'Step 4: Select Archetypes', jump: 'Step4Selectheader'}, {linkid: 'h', body: 'Step 5: Record Archetype Abilities', jump: 'Step5Recordheader'}, {linkid: 'h', body: 'Step 6: Roll Flaws', jump: 'Step6RollFheader'}, {linkid: 'h', body: 'Step 7: Adjust Stats', jump: 'Step7Adjustheader'}, {linkid: 'h', body: 'Step 8: Calculate Character Vitals', jump: 'Step8Calculheader'}, {linkid: 'hg', body: 'Bonus CrP', jump: 'BonusCrPheader'}, {linkid: 'hg', body: 'Starting Stress Threshold', jump: 'StartingStresheader'}, {linkid: 'hg', body: 'Starting Vitality', jump: 'StartingVitalheader'}, {linkid: 'hg', body: 'Starting Honor', jump: 'StartingHonorheader'}, {linkid: 'hg', body: 'Starting Fatigue', jump: 'StartingFatigheader'}, {linkid: 'hg', body: 'Levels of Induction', jump: 'LevelsofInduheader'}, {linkid: 'h', body: 'Step 9: Training & Skills', jump: 'Step9Trainiheader'}, {linkid: 'hg', body: 'Calculating Starting Ranks', jump: 'CalculatingStheader'}, {linkid: 'h', body: 'Step 10: Flesh Out Personality', jump: 'Step10Fleshheader'}, {linkid: 'hg', body: 'Goals', jump: 'Goalsheader'}, {linkid: 'hg', body: 'Traits', jump: 'Traitsheader'}, {linkid: 'hg', body: 'Racial Temperament', jump: 'RacialTemperaheader'}, {linkid: 'hg', body: 'Devotions', jump: 'Devotionsheader'}, {linkid: 'hg', body: 'Reputation', jump: 'Reputationheader'}, {linkid: 'h', body: 'Step 11: Buy Equipment', jump: 'Step11BuyEheader'}, {linkid: 'h', body: 'Step 12: Transfer to Character Sheet', jump: 'Step12Transheader'}]
  ngOnInit() {
  }

}
