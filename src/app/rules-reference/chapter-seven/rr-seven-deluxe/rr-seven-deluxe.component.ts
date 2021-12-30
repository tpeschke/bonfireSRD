import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rr-seven-deluxe',
  templateUrl: './rr-seven-deluxe.component.html',
  styleUrls: ['./rr-seven-deluxe.component.css', '../../../chapter.css']
})
export class RrSevenDeluxeComponent implements OnInit {

  constructor() { }
  
  side = [{linkid: 'h', body: 'The GM’s Best Friend', jump: 'TheGMsBestheader'}, {linkid: 'h', body: 'Dice Size Hierarchy', jump: 'DiceSizeHierheader'}, {linkid: 'h', body: 'Diseases & Poisons', jump: 'DiseasesPoiheader'}, {linkid: 'hg', body: 'Recovering', jump: 'Recoveringheader'}, {linkid: 'hg', body: 'Germ Theory', jump: 'GermTheoryheader'}, {linkid: 'h', body: 'Falling', jump: 'Fallingheader'}, {linkid: 'h', body: 'Illumination', jump: 'Illuminationheader'}, {linkid: 'hg', body: 'Blinding', jump: 'Blindingheader'}, {linkid: 'hg', body: 'Bright', jump: 'Brightheader'}, {linkid: 'hg', body: 'Normal', jump: 'Normalheader'}, {linkid: 'hg', body: 'Dim', jump: 'Dimheader'}, {linkid: 'hg', body: 'Dark', jump: 'Darkheader'}, {linkid: 'hg', body: 'Sources of Light', jump: 'SourcesofLigheader'}, {linkid: 'h', body: 'Long-Term Exhaustion', jump: 'LongTermExhaheader'}, {linkid: 'hg', body: 'Small- & Large-Sized Creatures', jump: 'SmallLargeheader'}, {linkid: 'h', body: 'Redeeming Contacts', jump: 'RedeemingContheader'}, {linkid: 'h', body: 'Sizing & Size Chart', jump: 'SizingSizeheader'}, {linkid: 'h', body: 'Stat Score Damage', jump: 'StatScoreDamheader'}]

  ngOnInit() {
  }

}