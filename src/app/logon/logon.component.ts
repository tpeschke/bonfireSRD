import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';
import { ActivatedRoute } from '@angular/router';
import local from '../local.js'

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(
    private chapterService: ChapterService,
    private route: ActivatedRoute
  ) { }

  public loggedIn = this.chapterService.login
  public patreon = this.chapterService.patreon;
  public loginEndpoint = local.login
  public patreonEndpoint = local.patreon

  ngOnInit() {
    if (!this.loggedIn) {
      this.chapterService.checkLogin().subscribe(newLoginValue => {
        this.loggedIn = newLoginValue
        if (!this.patreon) {
          this.chapterService.checkPatreon()
            .subscribe(newPatreonValue => {
              this.patreon = newPatreonValue
              if (!newPatreonValue) {
                this.route.queryParams.subscribe(params => {
                  if (params.code) {
                    this.patreon = 'loading';
                    this.chapterService.updatePatreon(params.code)
                      .subscribe(tier => {
                        this.patreon = tier
                      })
                  }
                })
              }
            })
        }
      })
    }
  }

}
