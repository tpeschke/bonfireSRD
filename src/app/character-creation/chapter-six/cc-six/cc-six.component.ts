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

  side = [{ linkid: 'h', body: 'Carry', jump: 'Carryheader' }, { linkid: 'hg', body: 'Wearing Items', jump: 'WearingItemsheader' }, { linkid: 'hg', body: 'Personal Containers', jump: 'PersonalContaheader' }, { linkid: 'hg', body: 'Going Over Carry', jump: 'GoingOverCarheader' }, { linkid: 'h', body: 'Currency', jump: 'Currencyheader' }, { linkid: 'h', body: 'Superior Equipment', jump: 'SuperiorEquipheader' }, { linkid: 'h', body: 'Wear', jump: 'Wearheader' }, { linkid: 'hg', body: 'Repairing', jump: 'Repairingheader' }, { linkid: 'h', body: 'Table Header Explanations', jump: 'TableHeaderEheader' }, { linkid: 'hg', body: 'Name ', jump: 'Nameheader' }, { linkid: 'hg', body: 'Size ', jump: 'Weightheader' }, { linkid: 'hg', body: 'Source ', jump: 'Sourceheader' }, { linkid: 'hg', body: 'Local Market ', jump: 'LocalMarketheader' }, { linkid: 'hg', body: 'Nearby City ', jump: 'NearbyCityheader' }, { linkid: 'hg', body: 'Distance City ', jump: 'DistanceCityheader' }, { linkid: 'h', body: 'Equipment Prices', jump: 'EquipmentPricheader' }, { linkid: 'hg', body: 'Animals, Livestock & Pets', jump: 'animalslivestockandpetsheader' }, { linkid: 'hg', body: 'Animals, Mounts', jump: 'animalsmount' }, { linkid: 'hg', body: 'Mount Stats', jump: 'mountstatesffff' }, { linkid: 'hg', body: 'Animal, Barding', jump: 'animalsbarding' }, { linkid: 'hg', body: 'Animals, Feed', jump: 'animalsfeed' }, { linkid: 'hg', body: 'Armor', jump: 'armortable' }, { linkid: 'hg', body: 'Armor Table Header Explanation', jump: 'ArmorTableHeheader' }, { linkid: 'hg', body: 'Armor Stats', jump: 'armorstatstable' }, { linkid: 'hg', body: 'Beverages', jump: 'beveragestables' }, { linkid: 'hg', body: 'Clothing', jump: 'clothingtables' }, { linkid: 'hg', body: 'Clothing, Accessories', jump: 'clothingaccessoriestables' }, { linkid: 'hg', body: 'Containers, Heavy', jump: 'containersheavytable' }, { linkid: 'hg', body: 'Containers, Personal', jump: 'containerspersonaltables' }, { linkid: 'hg', body: 'Hirelings', jump: 'Hirelingsheader' }, { linkid: 'hg', body: 'Poisons & Toxins', jump: 'poisonsandtoxins' }, { linkid: 'hg', body: 'Services', jump: 'servicestables' }, { linkid: 'hg', body: 'Shields', jump: 'shieldstables' }, { linkid: 'hg', body: 'Shield Table Header Explanation', jump: 'ShieldTableHheader' }, { linkid: 'hg', body: 'Shield Stats', jump: 'shieldstatstables' }, { linkid: 'hg', body: 'Shield Bonuses', jump: 'ShieldBonusesheader' }, { linkid: 'hg', body: 'Substances, Alchemical', jump: 'substancesalchmeical' }, { linkid: 'hg', body: 'Substances, Ropes & Fabrics', jump: 'substancesropesandfrabcirs' }, { linkid: 'hg', body: 'Tools, Adventuring', jump: 'toolsadventuring' }, { linkid: 'hg', body: 'Tools, General', jump: 'toolsgeneraling' }, { linkid: 'hg', body: 'Tools, Trade', jump: 'toolstradetables' }, { linkid: 'hg', body: 'Weapon, Axes', jump: 'weaponsaxes' }, { linkid: 'hg', body: 'Weapons, Polearms', jump: 'weaponspolearms' }, { linkid: 'hg', body: 'Weapons, Sidearms', jump: 'weaponssidearms' }, { linkid: 'hg', body: 'Weapons, Swords', jump: 'weaponsswoerds' }, { linkid: 'hg', body: 'Weapons, Trauma', jump: 'weaponstrauma' }, { linkid: 'hg', body: "Weapons, Ranged", jump: 'weaponsranged' }, { linkid: 'hg', body: 'Weapon Table Header Explanation', jump: 'WeaponTableHheader' }, { linkid: 'hg', body: 'Melee Weapon Stats', jump: 'meleeweaponstats' }, { linkid: 'hg', body: 'Ranged Weapon Stats', jump: 'weaponsrangedstats' }, { linkid: 'hg', body: 'Range Tables', jump: 'weaponrangetables' }, { linkid: 'hg', body: 'Weapon Bonuses', jump: 'WeaponBonusesheader' },]
  ngOnInit() {
  }

}
