import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rr-five',
  templateUrl: './rr-five.component.html',
  styleUrls: ['./rr-five.component.css', '../../../chapter.css']
})
export class RrFiveComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'Favor', jump: 'Favorheader'}, {linkid: 'hg', body: 'Invoking Miracles', jump: 'InvokingMiracheader'}, {linkid: 'hg', body: 'Restrictions', jump: 'Restrictionsheader'}, {linkid: 'h', body: 'Acquiring Favor', jump: 'AcquiringFavoheader'}, {linkid: 'hg', body: 'Daily Sacrifices ', jump: 'DailySacrificheader'}, {linkid: 'hg', body: 'Sabbatic Holy Days', jump: 'SabbaticHolyheader'}, {linkid: 'hg', body: 'Lunar Holy Days', jump: 'LunarHolyDayheader'}, {linkid: 'hg', body: 'Solar Holy Days', jump: 'SolarHolyDayheader'}, {linkid: 'hg', body: 'Annual Holy Days', jump: 'AnnualHolyDaheader'}, {linkid: 'hg', body: 'Alm Scripts', jump: 'AlmScriptheader'}, {linkid: 'hg', body: 'Taking an Oath', jump: 'TakinganOathheader'}]
  ngOnInit() {
  }

}
