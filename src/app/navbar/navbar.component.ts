import { Component, OnInit, HostListener } from '@angular/core';
import { NotReduxService } from '../not-redux.service';
import { Router, NavigationEnd } from '@angular/router'
import { ChapterService } from '../chapter.service'
import local from '../local'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  public chapter = '';
  public pervious = '';
  public perviousRoute = 1;
  public next = '';
  public nextRoute = 1;
  public reset = '';
  public marginBack = true;
  public ham = false;
  public height = 0
  public login = ''

  ngOnInit() {
    if (!this.chapterService.login) {
      this.chapterService.checkLogin().subscribe(login => {
        if (login) {
          this.chapterService.checkPatreon().subscribe().unsubscribe
        }
      }).unsubscribe()
    }
    
    this.router.events.subscribe(p => {
      if (p instanceof NavigationEnd) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0

        if (p.url !== '/search' && p.url !== '/') {
          let route = +p.url.split('/')[2].split('?')[0]
          if (route !== 0) {
            this.setChapter(route)
            if (p.url.split('=')[1]) {
              this.scrollToElement(p.url.split('=')[1])
            }
          } 
        } else {
          this.chapter = '';
          this.pervious = '';
          this.perviousRoute = 1;
          this.next = '';
          this.nextRoute = 1;
          this.reset = '';
        }
      }
    })
    this.login = `https://www.patreon.com/oauth2/authorize?response_type=code&redirect_uri=${local.redirect}&client_id=${local.id}`
  }

  @HostListener('document:scroll', ['$event'])

  handleScroll(e: any): void {
    if (e.target.documentElement.scrollTop > 15) {
      this.marginBack = false;
    } else {
      this.marginBack = true;
    }
  }

  scrollToElement(element): void {
    let el = document.getElementById(element.replace(/ |-|:|&|'|([()])|\//ig, ''))
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

  viewChapter(name: string): void {
    this.chapter = name;
  }

  getChapter(id: number): string {
    switch (id) {
      case 1:
        return 'Character Creation';
      case 2:
        return 'Ability Scores';
      case 3:
        return 'Races';
      case 4:
        return 'Archetypes';
      case 5:
        return 'Flaws';
      case 6:
        return 'Character Vitals';
      case 7:
        return 'Masteries';
      case 8:
        return 'Skills';
      case 9:
        return 'Social';
      case 10:
        return 'Combat';
      case 11:
        return 'Equipment';
      case 12:
        return 'Magic';
      case 13:
        return 'Divine';
      case 14:
        return 'Character Progression';
      case 15:
        return 'Misc Rules';
      default:
        return 'Home';
    }
  }

  setChapter(chapter: any): void {
    if (chapter === 'p') {
      this.chapter = this.getChapter(this.perviousRoute);
      this.reset = this.getChapter(this.perviousRoute);
      this.nextRoute = this.nextRoute - 1;
      this.perviousRoute = this.perviousRoute - 1;
      this.pervious = this.getChapter(this.perviousRoute);
      this.next = this.getChapter(this.nextRoute);
    } else if (chapter === 'n') {
      this.chapter = this.getChapter(this.nextRoute);
      this.reset = this.getChapter(this.nextRoute);
      this.nextRoute = this.nextRoute + 1;
      this.perviousRoute = this.perviousRoute + 1;
      this.pervious = this.getChapter(this.perviousRoute);
      this.next = this.getChapter(this.nextRoute);
    } else {
      this.perviousRoute = chapter - 1;
      this.nextRoute = chapter + 1
      this.chapter = this.getChapter(chapter);
      this.reset = this.getChapter(chapter);
      this.pervious = this.getChapter(chapter - 1);
      this.next = this.getChapter(chapter + 1);
    }
    if (this.ham) {
      this.ham = false;
    }
  }

  resetChapter(): void {
    this.chapter = this.reset
  }

  openHam(): void {
    this.ham = !this.ham
  }

}
