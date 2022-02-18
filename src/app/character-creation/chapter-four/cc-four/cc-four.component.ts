import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc-four',
  templateUrl: './cc-four.component.html',
  styleUrls: ['./cc-four.component.css', '../../../chapter.css']
})
export class CcFourComponent implements OnInit {

  constructor() { }

  side = [{linkid: 'h', body: 'Flaws', jump: 'Flawsheader'}, {linkid: 'hg', body: 'Flaw Severity', jump: 'FlawSeverityheader'}, {linkid: 'hg', body: 'Roleplaying Out Flaws', jump: 'roleplayingoutflaws'}, {linkid: 'h', body: 'Starting Flaws', jump: 'StartingFlawsheader'}, {linkid: 'hg', body: 'Rolling Flaws', jump: 'RollingFlawsheader'}, {linkid: 'hg', body: 'Cherry Picking Flaws', jump: 'CherryPickingheader'}, {linkid: 'h', body: 'Flaw Descriptions', jump: 'FlawDescriptiheader'}, {linkid: 'hg', body: 'Addict', jump: 'ADDICTheader'}, {linkid: 'hg', body: 'Atheist', jump: 'ATHEISTheader'}, {linkid: 'hg', body: 'Blind, Total', jump: 'BLINDTOTALheader'}, {linkid: 'hg', body: 'Boar Faced', jump: 'BOARFACEDheader'}, {linkid: 'hg', body: 'Dark Secret', jump: 'DARKSECRETheader'}, {linkid: 'hg', body: 'Debtor', jump: 'DEBTORheader'}, {linkid: 'hg', body: 'Deranged', jump: 'DERANGEDheader'}, {linkid: 'hg', body: 'Epileptic', jump: 'EPILEPTICheader'}, {linkid: 'hg', body: 'Excommunicated', jump: 'EXCOMMUNICATEDheader'}, {linkid: 'hg', body: 'Fated', jump: 'FATEDheader'}, {linkid: 'hg', body: 'Feral', jump: 'FERALheader'}, {linkid: 'hg', body: 'Half-life', jump: 'HALFLIFEheader'}, {linkid: 'hg', body: 'Haunted', jump: 'HAUNTEDheader'}, {linkid: 'hg', body: 'Hemophilic', jump: 'HEMOPHILICheader'}, {linkid: 'hg', body: 'Idiot Savant', jump: 'IDIOTSAVANTheader'}, {linkid: 'hg', body: 'Impish', jump: 'IMPISHheader'}, {linkid: 'hg', body: 'Impotent', jump: 'IMPOTENTheader'}, {linkid: 'hg', body: 'Inbred', jump: 'INBREDheader'}, {linkid: 'hg', body: 'Limp', jump: 'LIMPheader'}, {linkid: 'hg', body: 'Missing Arm', jump: 'MISSINGARMheader'}, {linkid: 'hg', body: 'Missing Ear', jump: 'MISSINGEARheader'}, {linkid: 'hg', body: 'Missing Eye', jump: 'MISSINGEYEheader'}, {linkid: 'hg', body: 'Monotheist', jump: 'MONOTHEISTheader'}, {linkid: 'hg', body: 'Mule', jump: 'MULEheader'}, {linkid: 'hg', body: 'No Depth Perception', jump: 'NODEPTHPERCEheader'}, {linkid: 'hg', body: 'Opusphobia', jump: 'OPUSPHOBIAheader'}, {linkid: 'hg', body: 'Passionless', jump: 'PASSIONLESSheader'}, {linkid: 'hg', body: 'Poor', jump: 'POORheader'}, {linkid: 'hg', body: 'Phobic', jump: 'PHOBICheader'}, {linkid: 'hg', body: 'Refugee', jump: 'REFUGEEheader'}, {linkid: 'hg', body: 'Secret Identity', jump: 'SECRETIDENTITheader'}, {linkid: 'hg', body: 'Self Martyr', jump: 'SELFMARTYRheader'}, {linkid: 'hg', body: 'Sensitive', jump: 'SENSITIVEheader'}, {linkid: 'hg', body: 'Sensitive Hearing', jump: 'SENSITIVEHEARheader'}, {linkid: 'hg', body: 'Talker', jump: 'TALKERheader'}, {linkid: 'hg', body: 'Thrall', jump: 'THRALLheader'}, {linkid: 'hg', body: 'Vow Of Poverty', jump: 'VOWofPOVERTYheader'}]
  ngOnInit() {
  }

}
