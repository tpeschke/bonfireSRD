import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rr-seven',
  templateUrl: './rr-seven.component.html',
  styleUrls: ['./rr-seven.component.css', '../../../chapter.css']
})
export class RrSevenComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'The GM’s Best Friend', jump: 'TheGMsBestheader'}, {linkid: 'h', body: 'Dice Size Hierarchy', jump: 'DiceSizeHierheader'}, {linkid: 'h', body: 'Falling', jump: 'Fallingheader'}, {linkid: 'h', body: 'Illumination', jump: 'Illuminationheader'}, {linkid: 'hg', body: 'Blinding', jump: 'Blindingheader'}, {linkid: 'hg', body: 'Bright', jump: 'Brightheader'}, {linkid: 'hg', body: 'Normal', jump: 'Normalheader'}, {linkid: 'hg', body: 'Dim', jump: 'Dimheader'}, {linkid: 'hg', body: 'Dark', jump: 'Darkheader'}, {linkid: 'hg', body: 'Sources of Light', jump: 'SourcesofLigheader'}, {linkid: 'h', body: 'Long-Term Exhaustion', jump: 'LongTermExhaheader'}, {linkid: 'hg', body: 'Small- & Large-Sized Creatures', jump: 'SmallLargeheader'}, {linkid: 'h', body: 'Redeeming Contacts', jump: 'RedeemingContheader'}, {linkid: 'h', body: 'Sizing & Size Chart', jump: 'SizingSizeheader'}, {linkid: 'h', body: 'Stat Score Damage', jump: 'StatScoreDamheader'}]
  ngOnInit() {
  }

}
