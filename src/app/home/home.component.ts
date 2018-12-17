import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../not-redux.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService) { }

  ngOnInit() {
    this.notRedux.toggleShow(false)
  }

  setChapter(id) {
    this.notRedux.setChapter(id)
  }

}
