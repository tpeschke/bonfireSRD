import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';
import { ActivatedRoute } from '@angular/router';
import local from '../local'

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

  public loggedIn = false
  public patreon: boolean | string = false;
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
              if (!pResult) {
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
