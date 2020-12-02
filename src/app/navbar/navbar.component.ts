import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { NotReduxService } from '../not-redux.service';
import { Router, NavigationEnd, NavigationStart } from '@angular/router'
import { ChapterService } from '../chapter.service'
import local from '../local'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, AfterViewInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router,
    private chapterService: ChapterService
  ) { }

  public chapter = '';
  public route = 1;
  public pervious = '';
  public perviousRoute = '';
  public next = '';
  public nextRoute = '';
  public reset = '';
  public marginBack = true;
  public ham = false;
  public height = 0
  public login = ''
  public loadIcon = false

  ngOnInit() {
    this.chapterService.checkPatreon().subscribe().unsubscribe()
  }

  ngAfterViewInit() {
    this.router.events.subscribe(p => {
      if (p instanceof NavigationStart) {
        this.loadIcon = true
      }
      if (p instanceof NavigationEnd) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0

        if (p.url !== '/search' && p.url !== '/') {
          let route = +p.url.split('/')[2].split('?')[0]
          if (route !== 0) {
            this.setChapter(route)
            if (p.url.split('=')[1]) {
              setTimeout(_ => {
                this.scrollToElement(p.url.split('=')[1])
                this.loadIcon = false
              }, 2500)
            } else {
              this.loadIcon = false
            }
          }
        } else {
          this.chapter = '';
          this.pervious = '';
          this.perviousRoute = '';
          this.next = '';
          this.nextRoute = '';
          this.reset = '';
          this.loadIcon = false
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
        return 'Stat Scores';
      case 3:
        return 'Races';
      case 4:
        return 'Archetypes';
      case 5:
        return 'Flaws';
      case 6:
        return 'Character Vitals';
      case 7:
        return 'Skills';
      case 8:
        return 'Social';
      case 9:
        return 'Combat';
      case 10:
        return 'Equipment';
      case 11:
        return 'The Weird';
      case 12:
        return 'Divine';
      case 13:
        return 'Character Progression';
      case 14:
        return 'Misc Rules';
      default:
        return 'Home';
    }
  }

  setChapter(chapter: any): void {
    if (chapter === 'p') {
      this.route = this.route - 1;
      this.reset = this.getChapter(this.route);
      this.chapter = this.getChapter(this.route);
      this.nextRoute = this.returnRoute(this.route + 1);
      this.perviousRoute = this.returnRoute(this.route - 1);
      this.pervious = this.getChapter(this.route - 1);
      this.next = this.getChapter(this.route + 1);
    } else if (chapter === 'n') {
      this.route = this.route + 1;
      this.reset = this.getChapter(this.route);
      this.chapter = this.getChapter(this.route);
      this.nextRoute = this.returnRoute(this.route + 1);
      this.perviousRoute = this.returnRoute(this.route - 1);
      this.pervious = this.getChapter(this.route - 1);
      this.next = this.getChapter(this.route + 1);
    } else if (chapter) {
      this.route = chapter;
      this.nextRoute = this.returnRoute(this.route + 1);
      this.perviousRoute = this.returnRoute(this.route - 1);
      this.chapter = this.getChapter(chapter);
      this.reset = this.getChapter(chapter);
      this.pervious = this.getChapter(chapter - 1);
      this.next = this.getChapter(chapter + 1);
    }
    if (this.ham) {
      this.ham = false;
    }
  }

  returnRoute(chapter) {
    if (chapter > 0 && chapter < 15) {
      return '/chapter/' + chapter
    } else {
      return '/'
    }
  }

  resetChapter(): void {
    this.chapter = this.reset
  }

  openHam(): void {
    this.ham = !this.ham
  }

}
