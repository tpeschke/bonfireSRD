import { Component, OnInit } from '@angular/core';
import tables from '../tables'

@Component({
  selector: 'app-cc-six',
  templateUrl: './cc-six.component.html',
  styleUrls: ['./cc-six.component.css', '../../../chapter.css']
})
export class CcSixComponent implements OnInit {

  constructor() { }

  tables = tables.tables;
  multi = tables.multipliers

  side = [{linkid: 'h', body: 'Carry', jump: 'Carryheader'}, {linkid: 'hg', body: 'Wearing Items', jump: 'WearingItemsheader'}, {linkid: 'hg', body: 'Personal Containers', jump: 'PersonalContaheader'}, {linkid: 'hg', body: 'Going Over Carry', jump: 'GoingOverCarheader'}, {linkid: 'h', body: 'Currency', jump: 'Currencyheader'}, {linkid: 'h', body: 'Superior Equipment', jump: 'SuperiorEquipheader'}, {linkid: 'h', body: 'Wear', jump: 'Wearheader'}, {linkid: 'hg', body: 'Repairing', jump: 'Repairingheader'}, {linkid: 'h', body: 'Table Header Explanations', jump: 'TableHeaderEheader'}, {linkid: 'hg', body: 'Name ', jump: 'Nameheader'}, {linkid: 'hg', body: 'Weight ', jump: 'Weightheader'}, {linkid: 'hg', body: 'Source ', jump: 'Sourceheader'}, {linkid: 'hg', body: 'Local Market ', jump: 'LocalMarketheader'}, {linkid: 'hg', body: 'Nearby City ', jump: 'NearbyCityheader'}, {linkid: 'hg', body: 'Distance City ', jump: 'DistanceCityheader'}, {linkid: 'h', body: 'Equipment Prices', jump: 'EquipmentPricheader'}, {linkid: 'hg', body: 'Mount Stats', jump: 'mountstatesffff'}, {linkid: 'hg', body: 'Small & Large Sized Creatures', jump: 'SMALLLARGEheader'}, {linkid: 'hg', body: 'Armor Table Header Explanation', jump: 'ArmorTableHeheader'}, {linkid: 'hg', body: 'Hirelings', jump: 'Hirelingsheader'}, {linkid: 'hg', body: 'Shield Table Header Explanation', jump: 'ShieldTableHheader'}, {linkid: 'hg', body: 'Shield Bonuses', jump: 'ShieldBonusesheader'}, {linkid: 'hg', body: 'Weapon Table Header Explanation', jump: 'WeaponTableHheader'}, {linkid: 'hg', body: 'Weapon Bonuses', jump: 'WeaponBonusesheader'}]
  ngOnInit() {
  }

}
