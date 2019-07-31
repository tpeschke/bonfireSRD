import { Component } from '@angular/core';
import { NotReduxService } from './not-redux.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private notRedux: NotReduxService,
    private router: Router
  ){}
  
}
