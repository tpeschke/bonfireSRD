import { Component } from '@angular/core';
import { NotReduxService } from './not-redux.service';
import { Router } from '@angular/router'
import { fadeInAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation]
})
export class AppComponent {
  constructor(
    private notRedux: NotReduxService,
    private router: Router
  ){}
  
}
