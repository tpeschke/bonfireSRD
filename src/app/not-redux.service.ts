import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotReduxService {

  constructor() { }

  public showChapter = false;

  toggleShow(sw1tch: Boolean): void {
    if (sw1tch) {
      this.showChapter = true;
    } else {
      this.showChapter = false;
    }
  }

}
