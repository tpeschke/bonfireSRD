import { Component, OnInit } from '@angular/core';
import kits from './kit';

@Component({
  selector: 'app-cc-one',
  templateUrl: './cc-one.component.html',
  styleUrls: ['./cc-one.component.css', '../../../chapter.css']
})
export class CcOneComponent implements OnInit {

  constructor() { }

  public kits = kits
  ngOnInit() {
  }

}
