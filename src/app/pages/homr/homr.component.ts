import { Component, Inject, PLATFORM_ID, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser, SlicePipe } from '@angular/common';

import { GlobalService } from '../../services/global.service';
import { forkJoin } from 'rxjs';

// declare var $: any;

@Component({
  selector: 'app-homr',
  standalone: true,
  imports: [  SlicePipe],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './homr.component.html',
  styleUrl: './homr.component.css'
})
export class HomrComponent implements OnInit{
  isBrowser: boolean;
  notLoaded:boolean =true
  latestList:any
  paidList:any


  constructor(@Inject(PLATFORM_ID) private platformId: Object, private global: GlobalService) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

 
  ngOnInit(): void {

    forkJoin({
      allList: this.global.getWithToken(`all-listings?populate=*`),
      paidList: this.global.getWithToken(`marketings?filters[active][$eq]=true&populate[all_listings][populate][0]=feature`)
    })
    .subscribe({
      next: (res: any) => {
        this.latestList = res.allList.data
        this.paidList = res.paidList.data
        // console.log (this.latestList)
      const filterData = this.latestList.filter((m:any)=>{
        // console.log(m.marketing)
        return m.marketing
      })
      this.paidList  = filterData
        this.notLoaded = false
       
        // console.log(this.latestList);
        // console.log(this.paidList);
        // this.isLoaded = true;
      },
      error: (err: any) => {
        console.log(err.error.error.message);
      },
    });
    
    
  }

  getBreakpoints() {
    return {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    };
  }
  

  
}
