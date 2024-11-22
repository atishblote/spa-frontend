import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FlowbiteService } from './services/flobite.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'spa-frontend';
  isHideMenu:boolean = false

    constructor(private flowbiteService: FlowbiteService) {}
  
    ngOnInit(): void {
      this.flowbiteService.loadFlowbite(flowbite => {
        // Your custom code here
        console.log('Flowbite loaded', flowbite);
      });
    }

    onMenuClick(){
      this.isHideMenu = false
    }
  }
