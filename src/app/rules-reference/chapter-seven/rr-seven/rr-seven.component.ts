import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rr-seven',
  templateUrl: './rr-seven.component.html',
  styleUrls: ['./rr-seven.component.css', '../../../chapter.css']
})
export class RrSevenComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'The GM’s Best Friend', jump: 'TheGMsBestheader'}, {linkid: 'hg', body: 'Perfect Rolls on Shrunken Die', jump: 'perfecrtrollsonshu'}, {linkid: 'h', body: 'Falling', jump: 'Fallingheader'}, {linkid: 'h', body: 'Illumination', jump: 'Illuminationheader'}, {linkid: 'hg', body: 'Blinding', jump: 'Blindingheader'}, {linkid: 'hg', body: 'Bright', jump: 'Brightheader'}, {linkid: 'hg', body: 'Normal', jump: 'Normalheader'}, {linkid: 'hg', body: 'Dim', jump: 'Dimheader'}, {linkid: 'hg', body: 'Dark', jump: 'Darkheader'}, {linkid: 'hg', body: 'Sources of Light', jump: 'SourcesofLigheader'}, {linkid: 'h', body: 'Long-Term Exhaustion', jump: 'LongTermExhaheader'}, {linkid: 'hg', body: 'Small- & Large-Sized Creatures', jump: 'SmallLargeheader'}, {linkid: 'h', body: 'Sizing & Size Chart', jump: 'SizingSizeheader'}, {linkid: 'hg', body: 'Changing Size', jump: 'chanigngzisize'}, {linkid: 'h', body: 'Stat Score Damage', jump: 'StatScoreDamheader'}]
  ngOnInit() {
  }

}
