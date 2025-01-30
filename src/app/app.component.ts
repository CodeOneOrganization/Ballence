import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./layouts/hero/hero.component";
import { NavComponent } from "./components/nav/nav.component";
import { HighFashionClothingsComponent } from "./layouts/high-fashion-clothings/high-fashion-clothings.component";
import { NewsComponent } from "./layouts/news/news.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { AboutComponent } from "./layouts/about/about.component";
import { LenisScrollService } from './services/LenisScrollService.service';
import { CommonModule } from '@angular/common';
import { IsHomePageService } from './services/IsHomePageService.service';
import { ProductService } from './services/Products.service';

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
    CommonModule,
  ],
  providers: [LenisScrollService, IsHomePageService],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  
  isHome!: boolean;  


  constructor(
    private lenisScrollService: LenisScrollService, 
    private isHomePageService: IsHomePageService,
  ){}

  ngOnInit(): void {
    this.isHomePageService.verify().subscribe((value)=>{
      this.isHome = value;
    })

    this.lenisScrollService.onInit();

  }
}
