import { Component, AfterViewInit, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser, SlicePipe } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GlobalService } from '../../services/global.service';
import { forkJoin } from 'rxjs';

// declare var $: any;

@Component({
  selector: 'app-homr',
  standalone: true,
  imports: [ CarouselModule, SlicePipe],
  
  templateUrl: './homr.component.html',
  styleUrl: './homr.component.css'
})
export class HomrComponent implements OnInit{
  notLoaded:boolean =true
  latestList:any
  paidList:any


  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    margin: 20,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  customOptionsAds: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    margin: 20,
    dots: false,
    autoplay:true,
    smartSpeed: 1000,
    autoplayTimeout:2000,
    navSpeed: 1000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private global: GlobalService) {}

 
  ngOnInit(): void {

    forkJoin({
      allList: this.global.getWithToken(`all-listings?populate=*`),
      paidList: this.global.getWithToken(`marketings?filters[active][$eq]=true&populate[all_listings][populate][0]=feature`)
    })
    .subscribe({
      next: (res: any) => {
        this.latestList = res.allList.data
        // this.paidList = res.paidList.data
        
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


  
}
