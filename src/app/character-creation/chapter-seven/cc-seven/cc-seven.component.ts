import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc-seven',
  templateUrl: './cc-seven.component.html',
  styleUrls: ['./cc-seven.component.css', '../../../chapter.css']
})
export class CcSevenComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'End Of Session Rewards', jump: 'EndofSessionheader'}, {linkid: 'hg', body: 'Ex', jump: 'Exheader'}, {linkid: 'hg', body: 'Honor', jump: 'Honorheader'}, {linkid: 'h', body: 'Leveling Up', jump: 'LevelingUpheader'}, {linkid: 'hg', body: 'Day 1: Receive Crp', jump: 'Day1Receiveheader'}, {linkid: 'hg', body: 'Day 2: Increase Stats', jump: 'Day2Increasheader'}, {linkid: 'hg', body: 'Day 3: Assess Personality', jump: 'Day3Assessheader'}, {linkid: 'hg', body: 'Day 4: Increase Archetype Abilities', jump: 'Day4Increasheader'}, {linkid: 'hg', body: 'Day 5: Train & Retrain', jump: 'Day5Trainheader'}, {linkid: 'hg', body: 'Day 6: Increase Vitality & Stress Threshold', jump: 'Day6Increasheader'}, {linkid: 'hg', body: 'Day 7: Adjust Honor & Reputation', jump: 'Day7Adjustheader'}, {linkid: 'h', body: 'Learning Non-standard Abilities', jump: 'LearningNonSheader'}, {linkid: 'hg', body: 'Rewards Beyond Wondrous Items', jump: 'RewardsBeyondheader'}, {linkid: 'hg', body: 'Leveling Abilities', jump: 'LevelingAbiliheader'}, {linkid: 'hg', body: 'Made-up Abilities', jump: 'MadeUpAbilitheader'}, {linkid: 'hg', body: 'Crp Discounts For Skills & Trainings', jump: 'CrPDiscountsheader'}, {linkid: 'h', body: 'Followers', jump: 'Followersheader'}, {linkid: 'hg', body: 'Follower Types', jump: 'FollowerTypesheader'}, {linkid: 'hg', body: 'Attracting Followers', jump: 'AttractingFolheader'}]
  ngOnInit() {
  }

}
