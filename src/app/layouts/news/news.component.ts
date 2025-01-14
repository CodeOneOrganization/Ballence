import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ElementsService } from '../../services/ElementsService.service';

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/products.service';
import { IProducts } from '../../common/Product.model';
import { CommonModule } from '@angular/common';

export enum PageThemeEnum {
  GREEN = "green",
  BLUE = "blue"
}


@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [ProductService, ElementsService],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements AfterViewInit, OnDestroy, OnInit {
  
  private scrollTrigger!: globalThis.ScrollTrigger;
  protected Products!: IProducts[]

  constructor(
    private elementsService: ElementsService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
     this.productService.getAllProducts().subscribe((data)=>{
      this.Products = data
      console.log(this.Products)
     })
  }

  ngAfterViewInit(): void {
    const news = document.querySelector<HTMLDivElement>(".news")!
    this.elementsService.setNewsElement(news)

    gsap.registerPlugin(ScrollTrigger)

    this.scrollTrigger = ScrollTrigger.create({
      trigger: ".news",
      start: "top top",
      end: "bottom top",
      // markers: true,
      onLeaveBack: () => {
        document.body.dataset["themeSchema"]! = PageThemeEnum.GREEN
      },
      onLeave: () => {
        document.body.dataset["themeSchema"]! = PageThemeEnum.GREEN
      },
      onEnter: () => {
        document.body.dataset["themeSchema"]! = PageThemeEnum.BLUE
      },
      onEnterBack: () => {
        document.body.dataset["themeSchema"]! = PageThemeEnum.BLUE
      },
    })


  }

  ngOnDestroy(): void {
    this.scrollTrigger.kill()
  }

  

}
