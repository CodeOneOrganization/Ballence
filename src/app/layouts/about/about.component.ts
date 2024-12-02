
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

    //pega as duas imagens
    const imageSliderRef = document.querySelectorAll<HTMLImageElement>('.image-slider');

    //percorre as imagens selecionadas
    imageSliderRef.forEach((imageElement) => {
      // window.addEventListener("scroll", () => {
      //   const { x, y, width, height } = imageElement.getBoundingClientRect()
      //   const x_ci = (width / 2) + x
      //   const y_ci = (height / 2) + y
      //   console.log("newCursorPositionX", x_ci)
      //   console.log("newCursorPositionY", y_ci)

      //   this.cursorService.setCursor({ x_ci, y_ci })
      // })

      //evento de entrada
      imageElement.addEventListener("mouseenter", (e) => {
        const imageSrc = String(imageElement.dataset["imageSrc"])
        const imageHeight = Number(imageElement.dataset["imageHeight"])
        console.log("imageHeight", imageHeight)

        const { x, y, width, height } = imageElement.getBoundingClientRect()
        const x_ci = (width / 2) + x
        const y_ci = (height / 2) + y

        this.isMouseEventMen = true;
        this.isMouseEvent = true
        this.image = imageSrc


        this.cursorService.setCursor({ x_ci, y_ci, height: imageHeight })
      })

      imageElement?.addEventListener('mouseleave', () => {
        this.isMouseEventMen = false;
        this.isMouseEvent = false
        this.image = ''
      });
    })
  }
}