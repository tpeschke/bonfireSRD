import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rr-two',
  templateUrl: './rr-two.component.html',
  styleUrls: ['./rr-two.component.css', '../../../chapter.css']
})
export class RrTwoComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'Introduction', jump: 'introductionheader'}, {linkid: 'hg', body: "Flow of a Confrontation", jump: 'FlowofaConfheader'}, {linkid: 'hg', body: "Translating the Rules", jump: 'Translatingthheader'}, {linkid: 'h', body: 'When to Start a Confrontation', jump: 'WhentoStartheader'}, {linkid: 'hg', body: 'Can & Can’t Do', jump: 'CanCantDoheader'}, {linkid: 'hg', body: 'Characteristics', jump: 'Characteristicheader'}, {linkid: 'h', body: 'Playing it Out', jump: 'PlayingitOutheader'}, {linkid: 'hg', body: 'Time Scale', jump: 'TimeScaleheader'}, {linkid: 'h', body: 'Getting Points', jump: 'GettingPointsheader'}, {linkid: 'hg', body: 'Evidence', jump: 'Evidenceheader'}, {linkid: 'hg', body: 'Appeals', jump: 'Appealsheader'}, {linkid: 'hg', body: 'Reasoning', jump: 'reaonsiojiheader'}, {linkid: 'hg', body: 'Conceding the Argument', jump: 'Concedingtheheader'}, {linkid: 'hg', body: 'Tracking Points', jump: 'TrackingPointheader'}, {linkid: 'h', body: 'Other Things to Note', jump: 'OtherThingstheader'}, {linkid: 'hg', body: 'Starting Bias', jump: 'RacialPrefereheader'}, {linkid: 'hg', body: 'Devotions', jump: 'Devotionsheaderseciopkfe'}, {linkid: 'hg', body: 'Reputation', jump: 'reputationheahjiodjfe'}, {linkid: 'hg', body: 'Equipment', jump: 'equipomioewe'}, {linkid: 'hg', body: 'Helper Characteristics & Skills', jump: 'helrpfskilchajiofe'}, {linkid: 'hg', body: 'Multiple People in a Confrontation', jump: 'MultiplePeoplheader'}, {linkid: 'h', body: 'Getting Points', jump: 'GettingPointsheader'}, {linkid: 'h', body: 'Ending a Confrontation', jump: 'EndingaConfrheader'}, {linkid: 'hg', body: 'Pushing the Point', jump: 'PushingthePoheader'}, {linkid: 'hg', body: 'Victory or Defeat', jump: 'VictoryorDefheader'}]
  ngOnInit() {
  }

}
