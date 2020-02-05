import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  constructor(
    private notRedux: NotReduxService
  ) { }

  private displayBanner = false;

  ngOnInit() {
    
  }

  ngAfterViewChecked() {
    this.displayBanner = true;
  }

} 
