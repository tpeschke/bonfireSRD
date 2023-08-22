import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/chapter.service';

@Component({
  selector: 'app-cc-four',
  templateUrl: './cc-four.component.html',
  styleUrls: ['./cc-four.component.css', '../../../chapter.css']
})
export class CcFourComponent implements OnInit {

  constructor(
    private chapterService: ChapterService,
  ) { }

  side = [{linkid: 'h', body: 'Flaws', jump: 'Flawsheader'}, {linkid: 'hg', body: 'Flaw Severity', jump: 'FlawSeverityheader'}, {linkid: 'hg', body: 'Flaw CrP Bonus', jump: 'flawcrpbouns'}, {linkid: 'hg', body: 'Roleplaying Out Flaws', jump: 'roleplayingoutflaws'}, {linkid: 'h', body: 'Starting Flaws', jump: 'StartingFlawsheader'}, {linkid: 'hg', body: 'Rolling Flaws', jump: 'RollingFlawsheadertFXqMObzjo'}, {linkid: 'hg', body: 'Cherry Picking Flaws', jump: 'CherryPickingheader'}, {linkid: 'h', body: 'Flaw Descriptions', jump: 'FlawDescriptiheader'}, {linkid: 'hg', body: 'Addict', jump: 'Addictheading'}, {linkid: 'hg', body: 'Ageusia', jump: 'AgeusiaheaderTAnuTNHiNf'}, {linkid: 'hg', body: 'Allergy, Food', jump: 'AllergyFoodheaderFNDbwfuMWn'}, {linkid: 'hg', body: 'Allergy, Misc', jump: 'AllergyMischeaderPWgmApUIzR'}, {linkid: 'hg', body: 'Asthmatic', jump: 'AsthmaticheaderLWuGlnQCuN'}, {linkid: 'hg', body: 'Atheist', jump: 'AtheistheaderFNPQHnTYgv'}, {linkid: 'hg', body: 'Bastard', jump: 'BastardheaderifVeGdkeSu'}, {linkid: 'hg', body: 'Blind', jump: 'BlindheaderejFzjQYqhm'}, {linkid: 'hg', body: 'Burn Scars', jump: 'BurnScarsheaderURPQmidRJb'}, {linkid: 'hg', body: 'Craven', jump: 'CravenheaderHHxpaSPJUd'}, {linkid: 'hg', body: 'Deaf', jump: 'DeafheaderQjLmdfFCwk'}, {linkid: 'hg', body: 'Debtor', jump: 'DebtorheaderJElCNbPgHi'}, {linkid: 'hg', body: 'Deranged', jump: 'DerangedheaderRidffUYgEQ'}, {linkid: 'hg', body: 'Epileptic', jump: 'EpilepticheaderSkNaTOGvZe'}, {linkid: 'hg', body: 'Excommunicated', jump: 'ExcommunicatedheaderSAHScjZyzT'}, {linkid: 'hg', body: 'Fated', jump: 'FatedheaderugesVAJvHm'}, {linkid: 'hg', body: 'Feral', jump: 'FeralheaderYbTzzFWdEL'}, {linkid: 'hg', body: 'Glutton', jump: 'GluttonheaderqiKXJOqLSg'}, {linkid: 'hg', body: 'Half-life', jump: 'HalflifeheaderxXKZSCXvpm'}, {linkid: 'hg', body: 'Haunted', jump: 'HauntedheaderWIDVEGhzyD'}, {linkid: 'hg', body: 'Hemophilic', jump: 'HemophilicheaderibLCRovJZE'}, {linkid: 'hg', body: 'Hyperopia', jump: 'HyperopiaheadervltxPyYqjG'}, {linkid: 'hg', body: 'Hypochondriac', jump: 'HypochondriacheadernkQTCyMAjA'}, {linkid: 'hg', body: 'Idiot Savant', jump: 'IdiotSavantheaderCIOoOIjoNI'}, {linkid: 'hg', body: 'Impatient', jump: 'ImpatientheaderMlEfueUjgy'}, {linkid: 'hg', body: 'Impotent', jump: 'ImpotentheaderfYzBcyBwWW'}, {linkid: 'hg', body: 'Inbred', jump: 'InbredheaderCLxfbrofoK'}, {linkid: 'hg', body: 'Infirm', jump: 'InfirmheaderbevIgDJeBP'}, {linkid: 'hg', body: 'Insomniac', jump: 'InsomniacheaderIBVWLnZXkc'}, {linkid: 'hg', body: 'Irritable Bowels', jump: 'IrritableBoweheaderMBapbikkBu'}, {linkid: 'hg', body: 'Labyrinthitis ', jump: 'LabyrinthitisheaderfWjrwFnmrQ'}, {linkid: 'hg', body: 'Lemming', jump: 'lemmingheahrioe'}, {linkid: 'hg', body: 'Limp', jump: 'LimpheaderaYmDjKsaBX'}, {linkid: 'hg', body: 'Missing Arm', jump: 'MissingArmheaderJfhIRtVhkL'}, {linkid: 'hg', body: 'Missing Digit', jump: 'MissingDigitheaderIpfwrRQDCk'}, {linkid: 'hg', body: 'Missing Ear', jump: 'MissingEarheaderiEeAvwgBRu'}, {linkid: 'hg', body: 'Missing Eye', jump: 'MissingEyeheaderhLRHlECmrB'}, {linkid: 'hg', body: 'Missing Hand', jump: 'MissingHandheaderWbmnYxxVvK'}, {linkid: 'hg', body: 'Missing Leg', jump: 'MissingLegheaderZUSKsYDxbp'}, {linkid: 'hg', body: 'Missing Teeth', jump: 'MissingTeethheaderiauDXpJazw'}, {linkid: 'hg', body: 'Monotheist', jump: 'MonotheistheaderAScHQRVdII'}, {linkid: 'hg', body: 'Mule', jump: 'MuleheaderTOMugOYXOS'}, {linkid: 'hg', body: 'Mute', jump: 'MuteheadernvyjQWspKK'}, {linkid: 'hg', body: 'Myopia', jump: 'MyopiaheaderdmimYbkqOx'}, {linkid: 'hg', body: 'Neurotic', jump: 'NeuroticheadergZsMEePyPl'}, {linkid: 'hg', body: 'No Depth Perception', jump: 'NoDepthPerceheaderaJIstRgCCR'}, {linkid: 'hg', body: 'Orphan', jump: 'OrphanheaderVdWAdEZcQr'}, {linkid: 'hg', body: 'Pacifist', jump: 'pacificfjiotheadeing'}, {linkid: 'hg', body: 'Phobia', jump: 'PhobiaheaderQQhvnCtRSg'}, {linkid: 'hg', body: 'Poor', jump: 'PoorheaderErbkkhCjwR'}, {linkid: 'hg', body: 'Refugee', jump: 'RefugeeheaderAkSpgtlWeb'}, {linkid: 'hg', body: 'Sensitive', jump: 'SensitiveheaderJdvTOwHLwF'}, {linkid: 'hg', body: 'Shaky Hands', jump: 'ShakyHandsheadergZnORfJQKB'},{linkid: 'hg', body: 'Self-Conscious', jump: 'selcoinvdieovjiwo'}, {linkid: 'hg', body: 'Slow-witted', jump: 'SlowwittedheaderjicjkCYWOg'}, {linkid: 'hg', body: 'Stutter', jump: 'StutterheadergeuOgVIFdt'}, {linkid: 'hg', body: 'Suvivor\'s Guilt', jump: 'surviviorgudioejheader'}, {linkid: 'hg', body: 'Thrall', jump: 'ThrallheaderBZnUOEIBsw'}, {linkid: 'hg', body: 'Trick Knee', jump: 'TrickKneeheaderBXNWdwjymP'}, {linkid: 'hg', body: 'Vexable', jump: 'VexableheaderKKwTFqXyyt'}, {linkid: 'hg', body: 'Vow Of Poverty', jump: 'VowOfPovertyheaderShVWpymbpH'}, {linkid: 'hg', body: 'Weak', jump: 'WeakheaderzFoQvxiCsX'}, {linkid: 'hg', body: 'Weird Resistant', jump: 'weirdresjiojtioew'}, {linkid: 'hg', body: 'Weird Vulnerable', jump: 'werjiojdiovejwio'}]
  flawTables = null
  flaw = null
  rerollCount = 0
  ngOnInit() {
    this.chapterService.getAllFlawTables().subscribe(result => this.flawTables = result)
  }

  getRandomFlaw() {
    this.rerollCount = 0
    this.chapterService.getRandomFlaw().subscribe(result => this.flaw = result)
  }

  getNewParentTable() {
    this.rerollCount++
    this.chapterService.getNewParentTable(this.flaw.flaw.roll).subscribe(result => this.flaw = result)
  }

  getNewFlaw() {
    this.rerollCount++
    this.chapterService.getNewFlaw(this.flaw.parentTable.table).subscribe(result => this.flaw = result)
  }

  scrollToFlaw() {
    let el = document.getElementById(this.flaw.flaw.jump)
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

}
