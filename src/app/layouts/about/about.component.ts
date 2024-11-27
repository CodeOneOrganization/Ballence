
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MarqueeComponent } from "../../components/marquee/marquee.component";
import { CursorInteractiveSlideComponent } from "../../components/cursor-interactive-slide/cursor-interactive-slide.component";

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

  ngAfterViewInit(): void {
    this.initImageSliders()
  }

  public initImageSliders(): void {
    const ref = document.getElementById('test');
    const imageSliderRef = document.querySelectorAll<HTMLImageElement>('.image-slider');

    imageSliderRef.forEach((imageElement) => {
      imageElement.addEventListener("mouseenter", () => {
        const imageSrc = String(imageElement.dataset["imageSrc"])

        this.isMouseEventMen = true;
        this.isMouseEvent = true
        console.log('Mouse Enter:', this.isMouseEventMen);
        this.image = imageSrc
      })

      imageElement?.addEventListener('mouseleave', () => {
        this.isMouseEventMen = false;
        this.isMouseEvent = false
        console.log('Mouse Leave:', this.isMouseEventMen);
        this.image = ''
      });
    })
  }
}