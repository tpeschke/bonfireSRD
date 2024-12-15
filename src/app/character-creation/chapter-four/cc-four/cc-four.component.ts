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

  side = [{linkid: 'hg', body: 'Integrity Bonus', jump: 'flawcrpbouns'}, {linkid: 'hg', body: 'Rank', jump: 'flarwranksevejioret'}, {linkid: 'h', body: 'Starting Burdens & Injuries', jump: 'StartingFlawsheader'}, {linkid: 'hg', body: 'Rolling', jump: 'RollingFlawsheadertFXqMObzjo'}, {linkid: 'hg', body: 'Cherry Picking', jump: 'CherryPickingheader'}, {linkid: 'h', body: 'Effects', jump: 'FlawDescriptiheader'}, {linkid: 'hg', body: 'Ageusia', jump: 'AgeusiaheaderTAnuTNHiNf'}, {linkid: 'hg', body: 'Allergy, Food', jump: 'AllergyFoodheaderFNDbwfuMWn'}, {linkid: 'hg', body: 'Allergy, Misc', jump: 'AllergyMischeaderPWgmApUIzR'}, {linkid: 'hg', body: 'Asthmatic', jump: 'AsthmaticheaderLWuGlnQCuN'}, {linkid: 'hg', body: 'Bastard', jump: 'BastardheaderifVeGdkeSu'}, {linkid: 'hg', body: 'Blind', jump: 'BlindheaderejFzjQYqhm'}, {linkid: 'hg', body: 'Burn Scars', jump: 'BurnScarsheaderURPQmidRJb'}, {linkid: 'hg', body: 'Deaf', jump: 'DeafheaderQjLmdfFCwk'}, {linkid: 'hg', body: 'Debtor', jump: 'DebtorheaderJElCNbPgHi'}, {linkid: 'hg', body: 'Deranged', jump: 'DerangedheaderRidffUYgEQ'}, {linkid: 'hg', body: 'Epileptic', jump: 'EpilepticheaderSkNaTOGvZe'}, {linkid: 'hg', body: 'Excommunicated', jump: 'ExcommunicatedheaderSAHScjZyzT'}, {linkid: 'hg', body: 'Fated', jump: 'FatedheaderugesVAJvHm'}, {linkid: 'hg', body: 'Feral', jump: 'FeralheaderYbTzzFWdEL'}, {linkid: 'hg', body: 'Half-Life', jump: 'HalflifeheaderxXKZSCXvpm'}, {linkid: 'hg', body: 'Haunted', jump: 'HauntedheaderWIDVEGhzyD'}, {linkid: 'hg', body: 'Hemophilic', jump: 'HemophilicheaderibLCRovJZE'}, {linkid: 'hg', body: 'Hyperopia', jump: 'HyperopiaheadervltxPyYqjG'}, {linkid: 'hg', body: 'Idiot Savant', jump: 'IdiotSavantheaderCIOoOIjoNI'}, {linkid: 'hg', body: 'Impulsive', jump: 'impulsiveheaderjioje'}, {linkid: 'hg', body: 'Inbred', jump: 'InbredheaderCLxfbrofoK'}, {linkid: 'hg', body: 'Infirm', jump: 'InfirmheaderbevIgDJeBP'}, {linkid: 'hg', body: 'Insomniac', jump: 'InsomniacheaderIBVWLnZXkc'}, {linkid: 'hg', body: 'Labyrinthitis ', jump: 'LabyrinthitisheaderfWjrwFnmrQ'}, {linkid: 'hg', body: 'Limp', jump: 'LimpheaderaYmDjKsaBX'}, {linkid: 'hg', body: 'Missing Arm', jump: 'MissingArmheaderJfhIRtVhkL'}, {linkid: 'hg', body: 'Missing Digit', jump: 'MissingDigitheaderIpfwrRQDCk'}, {linkid: 'hg', body: 'Missing Ear', jump: 'MissingEarheaderiEeAvwgBRu'}, {linkid: 'hg', body: 'Missing Eye', jump: 'MissingEyeheaderhLRHlECmrB'}, {linkid: 'hg', body: 'Missing Hand', jump: 'MissingHandheaderWbmnYxxVvK'}, {linkid: 'hg', body: 'Missing Leg', jump: 'MissingLegheaderZUSKsYDxbp'}, {linkid: 'hg', body: 'Missing Teeth', jump: 'MissingTeethheaderiauDXpJazw'}, {linkid: 'hg', body: 'Mute', jump: 'MuteheadernvyjQWspKK'}, {linkid: 'hg', body: 'Myopia', jump: 'MyopiaheaderdmimYbkqOx'}, {linkid: 'hg', body: 'No Depth Perception', jump: 'NoDepthPerceheaderaJIstRgCCR'}, {linkid: 'hg', body: 'Orphan', jump: 'OrphanheaderVdWAdEZcQr'}, {linkid: 'hg', body: 'Poor', jump: 'PoorheaderErbkkhCjwR'}, {linkid: 'hg', body: 'Refugee', jump: 'RefugeeheaderAkSpgtlWeb'}, {linkid: 'hg', body: 'Shaky Hands', jump: 'ShakyHandsheadergZnORfJQKB'}, {linkid: 'hg', body: 'Sterile', jump: 'sterilehifojewiojew'}, {linkid: 'hg', body: 'Stutter', jump: 'StutterheadergeuOgVIFdt'}, {linkid: 'hg', body: 'Thrall', jump: 'ThrallheaderBZnUOEIBsw'}, {linkid: 'hg', body: 'Trick Knee', jump: 'TrickKneeheaderBXNWdwjymP'}, {linkid: 'hg', body: 'Vow Of Poverty', jump: 'VowOfPovertyheaderShVWpymbpH'}, {linkid: 'hg', body: 'Weak', jump: 'WeakheaderzFoQvxiCsX'}, {linkid: 'hg', body: 'Weird Resistant', jump: 'weirdresjiojtioew'}, {linkid: 'hg', body: 'Weird Vulnerable', jump: 'werjiojdiovejwio'}]
  ibTables = null
  ib = null
  rerollCount = 0
  ngOnInit() {
    this.chapterService.getAllIBTables().subscribe(result => this.ibTables = result)
  }

  getRandomIB() {
    this.rerollCount = 0
    this.chapterService.getRandomIB().subscribe(result => this.ib = result)
  }

  getNewParentTable() {
    this.rerollCount++
    this.chapterService.getNewParentTable(this.ib.ib.roll).subscribe(result => this.ib = result)
  }

  getNewIB() {
    this.rerollCount++
    this.chapterService.getNewIB(this.ib.parentTable.table).subscribe(result => this.ib = result)
  }

  scrollToIB() {
    let el = document.getElementById(this.ib.ib.jump)
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

}
