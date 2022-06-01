import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rr-four',
  templateUrl: './rr-four.component.html',
  styleUrls: ['./rr-four.component.css', '../../../chapter.css']
})
export class RrFourComponent implements OnInit {

  constructor() { }

  side = [{ linkid: 'h', body: 'Introduction', jump: 'Introductionheader' }, { linkid: 'h', body: 'Objectives', jump: 'Objectivesheader' }, { linkid: 'h', body: 'Obstacles', jump: 'Obstaclesheader' }, { linkid: 'hg', body: 'Difficulty', jump: 'Difficultyheader' }, { linkid: 'hg', body: 'Complications & Failures', jump: 'Complicationsheader' }, { linkid: 'hg', body: 'Success & Boons', jump: 'Boonsheader' }, { linkid: 'hg', body: 'Fallout', jump: 'Falloutheader' }, { linkid: 'h', body: 'Time Scale', jump: 'TimeScaleheader' }, { linkid: 'h', body: 'Strategies', jump: 'Strategiesheader' }, { linkid: 'hg', body: 'Assets & Contacts', jump: 'AssetsContaheader' }, { linkid: 'hg', body: 'Equipment', jump: 'Equipmentheader' }, { linkid: 'hg', body: 'Helper Skills', jump: 'HelperSkillsheader' }, { linkid: 'hg', body: 'Multi-Tasking', jump: 'MultiTaskingheader' }, { linkid: 'hg', body: 'Not Sweating It', jump: 'NotSweatingIheader' }, { linkid: 'hg', body: 'Preparation', jump: 'Preparationheader' }, {linkid: 'hg', body: "Repurpose Skill", jump: 'Repurspioeskillh'}, { linkid: 'hg', body: 'Rushing It', jump: 'RushingItheader' }]

  skillMatrix = [
    [
      '+0', 'Diffic', 'Diffic',
      'Ave', 'Ave', 'Ave',
      'Easy', 'Easy', 'Trivial',
      'Trivial', 'Trivial', 'Trivial',
      'Trivial', 'Trivial', 'Trivial',
      'Trivial', 'Trivial', 'Trivial',
      'Auto', 'Auto', 'Auto',
      'Auto'
    ],
    [
      '+d4!', 'Hard', 'Hard',
      'Hard', 'Diffic', 'Diffic',
      'Diffic', 'Ave', 'Ave',
      'Easy', 'Easy', 'Easy',
      'Trivial', 'Trivial', 'Trivial',
      'Trivial', 'Trivial', 'Trivial',
      'Trivial', 'Trivial', 'Trivial',
      'Trivial'
    ],
    [
      '+d6!', 'Hard', 'Hard',
      'Hard', 'Hard', 'Diffic',
      'Diffic', 'Diffic', 'Ave',
      'Ave', 'Easy', 'Easy',
      'Easy', 'Trivial', 'Trivial',
      'Trivial', 'Trivial', 'Trivial',
      'Trivial', 'Trivial', 'Trivial',
      'Trivial'
    ],
    [
      '+d8!', 'Hard', 'Hard',
      'Hard', 'Hard', 'Hard',
      'Diffic', 'Diffic', 'Diffic',
      'Ave', 'Ave', 'Easy',
      'Easy', 'Easy', 'Trivial',
      'Trivial', 'Trivial', 'Trivial',
      'Trivial', 'Trivial', 'Trivial',
      'Trivial'
    ],
    [
      '+d10!', 'Challen', 'Hard',
      'Hard', 'Hard', 'Hard',
      'Hard', 'Diffic', 'Diffic',
      'Diffic', 'Ave', 'Ave',
      'Easy', 'Easy', 'Easy',
      'Trivial', 'Trivial', 'Trivial',
      'Trivial', 'Trivial', 'Trivial',
      'Trivial'
    ],
    [
      '+d12!', 'Challen', 'Challen',
      'Hard', 'Hard', 'Hard',
      'Hard', 'Hard', 'Diffic',
      'Diffic', 'Diffic', 'Ave',
      'Ave', 'Easy', 'Easy',
      'Easy', 'Trivial', 'Trivial',
      'Trivial', 'Trivial', 'Trivial',
      'Trivial'
    ],
    [
      '+d20!', 'Impos', 'Challen',
      'Challen', 'Challen', 'Challen',
      'Challen', 'Hard', 'Hard',
      'Hard', 'Hard', 'Hard',
      'Diffic', 'Diffic', 'Diffic',
      'Ave', 'Ave', 'Easy',
      'Easy', 'Easy', 'Trivial',
      'Trivial'
    ],
    [
      '+d20!+d4!', 'Impos', 'Impos',
      'Impos', 'Impos', 'Challen',
      'Challen', 'Challen', 'Challen',
      'Challen', 'Challen', 'Hard',
      'Hard', 'Hard', 'Hard',
      'Diffic', 'Diffic', 'Diffic',
      'Ave', 'Ave', 'Ave',
      'Easy'
    ],
    [
      '+d20!+d6!', 'Impos', 'Impos',
      'Impos', 'Impos', 'Impos',
      'Challen', 'Challen', 'Challen',
      'Challen', 'Challen', 'Hard',
      'Hard', 'Hard', 'Hard',
      'Hard', 'Diffic', 'Diffic',
      'Diffic', 'Ave', 'Ave',
      'Ave'
    ],
    [
      '+d20!+d8!', 'Impos', 'Impos',
      'Impos', 'Impos', 'Impos',
      'Impos', 'Challen', 'Challen',
      'Challen', 'Challen', 'Challen',
      'Hard', 'Hard', 'Hard',
      'Hard', 'Hard', 'Diffic',
      'Diffic', 'Diffic', 'Ave', 'Ave'
    ],
    [
      '+d20!+d10!', 'Impos',
      'Impos', 'Impos',
      'Impos', 'Impos',
      'Impos', 'Impos',
      'Challen', 'Challen',
      'Challen', 'Challen',
      'Challen', 'Hard',
      'Hard', 'Hard',
      'Hard', 'Hard',
      'Diffic', 'Diffic',
      'Diffic', 'Ave'
    ],
    [
      '+d20!+d12!', 'Impos',
      'Impos', 'Impos',
      'Impos', 'Impos',
      'Impos', 'Impos',
      'Impos', 'Challen',
      'Challen', 'Challen',
      'Challen', 'Challen',
      'Hard', 'Hard',
      'Hard', 'Hard',
      'Hard', 'Diffic',
      'Diffic', 'Diffic'
    ],
    [
      '+2d20!', 'Impos', 'Impos',
      'Impos', 'Impos', 'Impos',
      'Impos', 'Impos', 'Impos',
      'Impos', 'Impos', 'Impos',
      'Impos', 'Challen', 'Challen',
      'Challen', 'Challen', 'Challen',
      'Hard', 'Hard', 'Hard',
      'Hard'
    ]
  ]
  ngOnInit() {
  }

}
