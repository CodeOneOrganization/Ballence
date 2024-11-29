import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { ElementsService } from '../../services/ElementsService.service';

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export enum PageThemeEnum {
  GREEN = "green",
  BLUE = "blue"
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements AfterViewInit, OnDestroy {
  scrollTrigger!: globalThis.ScrollTrigger;
  constructor(
    private elementsService: ElementsService
  ) { }

  ngAfterViewInit(): void {
    const news = document.querySelector<HTMLDivElement>(".news")!
    this.elementsService.setNewsElement(news)

    gsap.registerPlugin(ScrollTrigger)

    this.scrollTrigger = ScrollTrigger.create({
      trigger: ".news",
      start: "top top",
      end: "bottom top",
      markers: true,
      onLeaveBack: () => {
        document.body.dataset["themeSchema"]! = PageThemeEnum.GREEN
        console.log("onLeaveBack")
      },
      onLeave: () => {
        document.body.dataset["themeSchema"]! = PageThemeEnum.GREEN
        console.log("onLeave")
      },
      onEnter: () => {
        document.body.dataset["themeSchema"]! = PageThemeEnum.BLUE
        console.log("onEnter")
      },
      onEnterBack: () => {
        document.body.dataset["themeSchema"]! = PageThemeEnum.BLUE
        console.log("onEnterBack")
      },
    })


  }

  ngOnDestroy(): void {
    this.scrollTrigger.kill()
  }

}
