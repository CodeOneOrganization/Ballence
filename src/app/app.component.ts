import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./layouts/hero/hero.component";
import { NavComponent } from "./components/nav/nav.component";
import { HighFashionClothingsComponent } from "./layouts/high-fashion-clothings/high-fashion-clothings.component";
import { NewsComponent } from "./layouts/news/news.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { AboutComponent } from "./layouts/about/about.component";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { LenisScrollService } from './services/LenisScrollService';

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
    AboutComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  

  constructor(private lenisScrollService: LenisScrollService){}

  ngOnInit(): void {
    this.lenisScrollService.onInit()
  }
}
