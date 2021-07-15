import { Component, OnInit } from '@angular/core';
import { NotReduxService } from '../../../not-redux.service';
import { ChapterService } from '../../../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-thirteen-advanced',
  templateUrl: './chapter-thirteen-advanced.component.html',
  styleUrls: ['../chapter-thirteen.component.css']
})
export class ChapterThirteenAdvancedComponent implements OnInit {

  constructor(
        private router: Router,
    private chapterService: ChapterService
  ) { }

  chapterName = '';
  side =[{linkid: 'h', body: 'Anatomy of the Divine', jump: 'ANATOMYoftheheader'}, {linkid: 'hg', body: 'COVENANTS', jump: 'COVENANTSiADfRSYVws'}, {linkid: 'hg', body: 'COSMIC LINKS', jump: 'COSMICLINKSvHGbhXmpwF'}, {linkid: 'h', body: 'Favor of the Divines', jump: 'FAVORoftheDheader'}, {linkid: 'hg', body: 'WHAT IS FAVOR?', jump: 'WHATisFAVORIoOErAXOZr'}, {linkid: 'hg', body: 'LEVELS OF DEVOTION', jump: 'LEVELSofDEVOlaroqlcirH'}, {linkid: 'hg', body: 'ACQUIRING FAVOR', jump: 'ACQUIRINGFAVOpycTIdBLJE'}, {linkid: 'hg', body: 'MAXIMUM FAVOR', jump: 'MAXIMUMFAVORuKbAjGtpsD'}, {linkid: 'h', body: 'Invoking Miracles', jump: 'INVOKINGMIRACheader'}, {linkid: 'hg', body: 'SACRED & PROFANE SPACES', jump: '13HDDgmqvRpc'}]
  
  ngOnInit(){}

  ngOnDestroy() {
     
    this.chapterName = ''
  }

   
}
