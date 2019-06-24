import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service'
import local from '../local'

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(
    private chapterService: ChapterService
  ) { }

  public loggedIn = false
  public patreon = false
  public loginEndpoint = local.login
  public patreonEndpoint = local.patreon

  ngOnInit() {
    this.chapterService.checkLogin()
      .subscribe(result => {
        this.loggedIn = result
        if (this.loggedIn) {
          this.chapterService.checkPatreon()
            .subscribe(pResult => {
              this.patreon = pResult
            })
        }
      })
  }

}
