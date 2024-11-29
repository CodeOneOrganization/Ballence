import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LenisScrollService } from '../../services/LenisScrollService.service';
import { IsHomePageService } from '../../services/IsHomePageService.service';
import { NewsComponent } from '../../layouts/news/news.component';
import { ElementsService } from '../../services/ElementsService.service';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export enum PageThemeEnum {
  GREEN = "green",
  BLUE = "blue"
}



@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit, AfterViewInit {

  isHome!: boolean;

  @ViewChild(NewsComponent, { read: ElementRef }) private newsComponentRef!: ElementRef
  constructor(
    private lenisScrollService: LenisScrollService,
    private isHomePageService: IsHomePageService,
    private elementsService: ElementsService
  ) { }

  ngOnInit(): void {
    this.isHomePageService.verify().subscribe((value) => {
      this.isHome = value;
      console.log('ishome nav: ' + this.isHome);
    });

    // this.initThemeEventListeners()

  }

  public initThemeEventListeners() {
    gsap.registerPlugin(ScrollTrigger);
    const news = this.elementsService.getNewsElement()
    console.log("news", news)

    if (!news) return

    ScrollTrigger.create({
      trigger: ".news",
      start: "top top",
      end: "bottom bottom",
      // markers: true,
      onLeaveBack: () => {
        document.body.dataset["themeSchema"]! = PageThemeEnum.BLUE
      },
      onEnter: () => {
        document.body.dataset["themeSchema"]! = PageThemeEnum.GREEN
      }
    })

  }

  ngAfterViewInit(): void {
    this.initThemeEventListeners()

    console.log("service ElementsService", ElementsService)
  }

  protected onClick(link: any): void {
    this.lenisScrollService.scrollTo(link);
  }

  private animateNavOnScroll(): void {

    gsap.to('.nav h1', {
      color: "var(--color-blue)",
    })
    gsap.to('.nav-menu li', {
      color: "var(--color-blue)",
    });
  }
}
