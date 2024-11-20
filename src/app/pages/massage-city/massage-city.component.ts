import { Component, Inject, PLATFORM_ID, OnInit, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, SlicePipe } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-massage-city',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './massage-city.component.html',
  styleUrl: './massage-city.component.css'
})
export class MassageCityComponent implements OnInit {
  slug:any
  notLoaded:boolean =true
  latestList:any
  location:string = ""
  getList:any
  paidList:any
  category:string = "massage"

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private global: GlobalService, private actRouter: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {

    this.actRouter.paramMap.subscribe((m)=>{
      this.slug = m.get('city')
      this.loadDataForCity()
    })

    console.log(this.slug)

  }

  loadDataForCity(){
    this.global.getWithToken(`locations?filters[slug][$eq]=${this.slug}&populate[0]=all_listings&populate[1]=all_listings.areas&populate[2]=all_listings.feature&populate[3]=all_listings.service_category`).subscribe({
      next: (res: any) => {
        console.log(res);
        this.location = res.data[0].title
        this.getList = res.data[0].all_listings
        this.notLoaded = false
       
        // this.isLoaded = true;
        
        const filterData = this.getList.filter((m:any)=>{
          return m.service_category.slug = this.category
          
        })
        this.latestList = filterData
        console.log(this.latestList);
      },
      error: (err: any) => {
        console.log(err.error.error.message);
      },
    });
  }
}
