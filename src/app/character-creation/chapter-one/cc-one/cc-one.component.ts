import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/chapter.service';
import kits from './kit';

@Component({
  selector: 'app-cc-one',
  templateUrl: './cc-one.component.html',
  styleUrls: ['./cc-one.component.css', '../../../chapter.css']
})
export class CcOneComponent implements OnInit {

  constructor(
    private chapterService: ChapterService
  ) { }

  trait = '';
  conviction = '';
  description = '';
  devotion = '';
  flaw = '';
  public kits = kits
  side = [{linkid: 'h', body: 'Step 1: Roll Stats', jump: 'Step1RollSheader'}, {linkid: 'hg', body: 'Strength', jump: 'Strengthheader'}, {linkid: 'hg', body: 'Dexterity', jump: 'Dexterityheader'}, {linkid: 'hg', body: 'Constitution', jump: 'Constitutionheader'}, {linkid: 'hg', body: 'Intellect', jump: 'Intellectheader'}, {linkid: 'hg', body: 'Willpower', jump: 'Willpowerheader'}, {linkid: 'hg', body: 'Presence', jump: 'Presenceheader'}, {linkid: 'hg', body: 'A Note About Low Stats', jump: 'ANoteAboutLheader'}, {linkid: 'hg', body: 'Example', jump: 'steponeexample'}, {linkid: 'h', body: 'Step 2: Starting Integrity', jump: 'Step2Receivheader'}, {linkid: 'hg', body: 'Bonus Integrity', jump: 'BonusCrPheader'}, {linkid: 'h', body: 'Step 3: Swap Stats', jump: 'Step3Selectheader'}, {linkid: 'hg', body: 'Example', jump: 'ExampleheaderJuciIZPPyo'}, {linkid: 'h', body: 'Step 4: Select Ancestry', jump: 'Step3Selectheader'}, {linkid: 'hg', body: 'Example', jump: 'ExampleheaderSzYTWRSkQS'}, {linkid: 'h', body: 'Step 5: Select Classes', jump: 'Step4Selectheader'}, {linkid: 'hg', body: 'Example', jump: 'ExampleheadersQaLmGOVmE'}, {linkid: 'h', body: 'Step 6: Roll Burdens & Injuries', jump: 'Step6RollFheader'}, {linkid: 'hg', body: 'Example', jump: 'ExampleheaderYjWXkmpRvO'}, {linkid: 'h', body: 'Step 7: Calculate Character Vitals', jump: 'Step8Calculheader'}, {linkid: 'hg', body: 'Starting Nerve', jump: 'StartingStresheader'}, {linkid: 'hg', body: 'Starting Vitality', jump: 'StartingVitalheader'}, {linkid: 'hg', body: 'Starting Fatigue Threshold', jump: 'StartingFatigheader'}, {linkid: 'hg', body: 'Levels of Induction & Max Favor', jump: 'LevelsofInduheader'}, {linkid: 'h', body: 'Step 8: Skills', jump: 'Step9Trainiheader'}, {linkid: 'hg', body: 'Calculating Starting Ranks', jump: 'CalculatingStheader'}, {linkid: 'hg', body: 'Example', jump: 'ExampleheaderUgZtyDQbuU'}, {linkid: 'h', body: 'Step 9: Flesh Out Personality', jump: 'Step10Fleshheader'}, {linkid: 'hg', body: 'Goals', jump: 'Goalsheader'}, {linkid: 'hg', body: 'Convictions', jump: 'ConvictionsheaderyktkVnfHWx'}, {linkid: 'hg', body: 'Relationships', jump: 'DevotionsheaderIDspydqCXk'}, {linkid: 'hg', body: 'Descriptions', jump: 'DescriptionsheaderVEGTkgzzcm'}, {linkid: 'hg', body: 'Flaws', jump: 'flawsheader'}, {linkid: 'hg', body: 'Ancestral Temperament', jump: 'AncestralTemperaheaderaLqmySSkSL'}, {linkid: 'hg', body: 'Contacts', jump: 'contactiosjiojf'}, {linkid: 'hg', body: 'Reputation', jump: 'Reputationheader'}, {linkid: 'h', body: 'Step 10: Buy Equipment', jump: 'Step11BuyEheader'}, {linkid: 'hg', body: 'Free Heirloom', jump: 'heirloom'}, {linkid: 'hg', body: 'Integrity for Cash', jump: 'leftovercrp'}, {linkid: 'hg', body: 'Kits', jump: 'kitsheader'}, {linkid: 'hg', body: 'Example', jump: 'ExampleheaderkBiHYsPwMQ'}, {linkid: 'h', body: 'Step 11: Record Class Abilities', jump: 'Step5Recordheader'}, {linkid: 'hg', body: 'Example', jump: 'ExampleheaderyxMSxYwFAQ'}, {linkid: 'h', body: 'Step 12: Transfer to Character Sheet', jump: 'Step12Transheader'}]
  ngOnInit() {
  }

  getConviction() {
    this.chapterService.getConviction()
      .subscribe(res => this.conviction = res[0].conviction)
  }

  getDescription() {
    this.chapterService.getDescription()
      .subscribe(res => this.description = res[0].description)
  }

  getDevotion() {
    this.chapterService.getDevotion()
      .subscribe(res => this.devotion = res[0].devotion)
  }

  getFlaw() {
    this.chapterService.getFlaw()
      .subscribe(res => this.flaw = res[0].title)
  }
}
