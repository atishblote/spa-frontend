import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser, SlicePipe } from '@angular/common';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-massage',
  standalone: true,
  imports: [ SlicePipe],
  templateUrl: './massage.component.html',
  styleUrl: './massage.component.css'
})
export class MassageComponent implements OnInit {
  slug:string = "massage"
  notLoaded:boolean =true
  latestList:any
  paidList:any


  constructor(@Inject(PLATFORM_ID) private platformId: Object, private global: GlobalService ) {}

 
  ngOnInit(): void {

    console.log(this.slug)
    this.global.getWithToken(`service-categories?filters[slug][$eq]=${this.slug}&populate[0]=all_listings.feature&populate[1]=all_listings.areas&populate[2]=all_listings.locations`).subscribe({
      next: (res: any) => {
        console.log(res);
        this.latestList = res.data[0].all_listings
        this.notLoaded = false
       
        console.log(this.latestList);
        // this.isLoaded = true;
      },
      error: (err: any) => {
        console.log(err.error.error.message);
      },
    });
    
    
  }

}
