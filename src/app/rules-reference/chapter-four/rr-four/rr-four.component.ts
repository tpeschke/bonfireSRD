import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rr-four',
  templateUrl: './rr-four.component.html',
  styleUrls: ['./rr-four.component.css', '../../../chapter.css']
})
export class RrFourComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'Introduction', jump: 'Introductionheader'}, {linkid: 'h', body: 'Objectives', jump: 'Objectivesheader'}, {linkid: 'h', body: 'Obstacles', jump: 'Obstaclesheader'}, {linkid: 'hg', body: 'Difficulty', jump: 'Difficultyheader'}, {linkid: 'hg', body: 'Complications & Failures', jump: 'Complicationsheader'}, {linkid: 'hg', body: 'Success & Boons', jump: 'Boonsheader'}, {linkid: 'hg', body: 'Fallout', jump: 'Falloutheader'}, {linkid: 'h', body: 'Time Scale', jump: 'TimeScaleheader'}, {linkid: 'h', body: 'Strategies', jump: 'Strategiesheader'}, {linkid: 'hg', body: 'Assets & Contacts', jump: 'AssetsContaheader'}, {linkid: 'hg', body: 'Equipment', jump: 'Equipmentheader'}, {linkid: 'hg', body: 'Helper Skills', jump: 'HelperSkillsheader'}, {linkid: 'hg', body: 'Multi-Tasking', jump: 'MultiTaskingheader'}, {linkid: 'hg', body: 'Not Sweating It', jump: 'NotSweatingIheader'}, {linkid: 'hg', body: 'Preparation', jump: 'Preparationheader'}, {linkid: 'hg', body: 'Rushing It', jump: 'RushingItheader'}]
  ngOnInit() {
  }

}
