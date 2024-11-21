import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./layouts/hero/hero.component";
import { NavComponent } from "./components/nav/nav.component";
import { HighFashionClothingsComponent } from "./layouts/high-fashion-clothings/high-fashion-clothings.component";
import { NewsComponent } from "./layouts/news/news.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { AboutComponent } from "./layouts/about/about.component";

import 'lenis/dist/lenis.css'
import { LenisScrollService } from './services/LenisScrollService';
import { CommonModule } from '@angular/common';
import { IsHomePageService } from './services/IsHomePageService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeroComponent, 
    NavComponent, 
    HighFashionClothingsComponent, 
    NewsComponent, 
    FooterComponent, 
    AboutComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  
  isHome!: boolean;  

  constructor(private lenisScrollService: LenisScrollService, private isHomePageService: IsHomePageService){}

  ngOnInit(): void {
    this.lenisScrollService.onInit();

    this.isHomePageService.verify().subscribe((value)=>{
      this.isHome = value;
    })


    console.log(this.isHome)
  }
}
