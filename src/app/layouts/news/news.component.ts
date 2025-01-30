import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core'
import { ElementsService } from '../../services/ElementsService.service'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { HttpClientModule } from '@angular/common/http'
import { ProductService } from '../../services/Products.service'
import { IProducts } from '../../model/Product.model'
import { CommonModule } from '@angular/common'
import { SlideComponent } from "../../components/slide/slide.component";

export enum PageThemeEnum {
  GREEN = 'green',
  BLUE = 'blue',
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    SlideComponent
  ],
  providers: [ProductService, ElementsService],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements AfterViewInit, OnDestroy, OnInit {

  private scrollTrigger!: globalThis.ScrollTrigger
  protected fakeArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
  protected Products!: IProducts[] | null

  constructor(
    private elementsService: ElementsService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.loadProducts()
    this.productService.getAllProducts().subscribe((data) => {this.Products = data})
  }

  ngAfterViewInit(): void {
    this.navThemeChange()
  }

  ngOnDestroy(): void {
    this.scrollTrigger.kill()
  }

  navThemeChange() {

    const news = document.querySelector<HTMLDivElement>('.news')!
    this.elementsService.setNewsElement(news)

    gsap.registerPlugin(ScrollTrigger)

    this.scrollTrigger = ScrollTrigger.create({
      trigger: '.news',
      start: 'top top',
      end: 'bottom top',
      // markers: true,
      onLeaveBack: () => {
        document.body.dataset['themeSchema']! = PageThemeEnum.GREEN
      },
      onLeave: () => {
        document.body.dataset['themeSchema']! = PageThemeEnum.GREEN
      },
      onEnter: () => {
        document.body.dataset['themeSchema']! = PageThemeEnum.BLUE
      },
      onEnterBack: () => {
        document.body.dataset['themeSchema']! = PageThemeEnum.BLUE
      },
    })
  }
}
