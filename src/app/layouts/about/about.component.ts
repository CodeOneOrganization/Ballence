
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MarqueeComponent } from "../../components/marquee/marquee.component";
import { CursorInteractiveSlideComponent } from "../../components/cursor-interactive-slide/cursor-interactive-slide.component";
import { CursorInteractiveSlideService } from '../../components/cursor-interactive-slide/cursor-interactive-slide.service';

@Component({
  selector: 'app-about',
  imports: [MarqueeComponent, CursorInteractiveSlideComponent, CommonModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent implements AfterViewInit {

  isMouseEventMen: boolean = false;
  isMouseEventWoman: boolean = false;
  isMouseEvent: boolean = false;
  image!: string

  constructor(private cursorService: CursorInteractiveSlideService) { }
  ngAfterViewInit(): void {
    this.initImageSliders()
  }

  public initImageSliders(): void {
    const imageSliderRef = document.querySelectorAll<HTMLImageElement>('.image-slider');

    imageSliderRef.forEach((imageElement) => {
      // imageElement.addEventListener("")

      imageElement.addEventListener("mousemove", () => {

      })

      imageElement.addEventListener("mouseenter", (e) => {
        const imageSrc = String(imageElement.dataset["imageSrc"])
        // const elementCenterPosition = e.offsetX + eoco
        // console.log("e.clientWidth", imageElement.clientWidth)
        // console.log("e.clientHeight", imageElement.clientHeight)
        // console.log("e.offsetX", e.offsetX)
        // console.log("e.offsetY", e.offsetY)
        const imageLeft = window.innerWidth - imageElement.offsetLeft
        console.log("🚀 ~ AboutComponent ~ imageElement.addEventListener ~ imageLeft:", imageLeft)
        const x_ci = (imageElement.clientWidth / 2) + imageLeft
        // console.log("🚀 ~ AboutComponent ~ imageElement.addEventListener ~ x_ci:", x_ci)
        const y_ci = (imageElement.clientHeight / 2) + imageElement.scrollTop
        // console.log("🚀 ~ AboutComponent ~ imageElement.addEventListener ~ y_ci:", y_ci)
        const x_c = e.clientX
        const y_c = e.clientY


        this.isMouseEventMen = true;
        this.isMouseEvent = true
        // console.log('Mouse Enter:', this.isMouseEventMen);
        this.image = imageSrc
        // this.cursorService.setCursor()

        this.cursorService.setCursor({
          x_c,
          y_c,
          x_ci,
          y_ci
        })
      })
        console.log("🚀 ~ AboutComponent ~ imageElement.addEventListener ~ imageLeft:", imageLeft)

      imageElement?.addEventListener('mouseleave', () => {
        this.isMouseEventMen = false;
        this.isMouseEvent = false
        // console.log('Mouse Leave:', this.isMouseEventMen);
        this.image = ''
      });
    })
  }
}