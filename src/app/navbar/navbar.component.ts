import { Component, OnInit, HostListener } from '@angular/core';
import { NotReduxService } from '../not-redux.service';
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(
    private notRedux: NotReduxService,
    private router: Router
  ) { }

  public chapter = '';
  public pervious = '';
  public perviousRoute = 1;
  public next = '';
  public nextRoute = 1;
  public reset = '';
  public marginBack = true;
  public mobile = false;
  public ham = false;

  ngOnInit() {
    this.router.events.subscribe(p => {
      if (p instanceof NavigationEnd) {
        if (p.url.substring(9) !== '0') {
          this.setChapter(+p.url.substring(9))
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
    this.mobile = window.innerWidth <= 500 ? true : false
  }

  @HostListener('document:scroll', ['$event'])

  handleScroll(e: any): void {
    if (e.target.documentElement.scrollTop > 15) {
      this.marginBack = false;
    } else {
      this.marginBack = true;
    }
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
      this.pervious = '< ' + this.getChapter(this.perviousRoute);
      this.next = this.getChapter(this.nextRoute) + ' >';
    } else if (chapter === 'n') {
      this.chapter = this.getChapter(this.nextRoute);
      this.reset = this.getChapter(this.nextRoute);
      this.nextRoute = this.nextRoute + 1;
      this.perviousRoute = this.perviousRoute + 1;
      this.pervious = '< ' + this.getChapter(this.perviousRoute);
      this.next = this.getChapter(this.nextRoute) + ' >';
    } else {
      this.perviousRoute = chapter - 1;
      this.nextRoute = chapter + 1
      this.chapter = this.getChapter(chapter);
      this.reset = this.getChapter(chapter);
      this.pervious = '< ' + this.getChapter(chapter - 1);
      this.next = this.getChapter(chapter + 1) + ' >';
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
