
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

      imageElement.addEventListener("mousemove", () => {

      })

      //evento de entrada
      imageElement.addEventListener("mouseenter", (e) => {

        //url da imagem
        const imageSrc = String(imageElement.dataset["imageSrc"])

        // pega a largura da tela e diminui pela distancia da imagem
        const imageLeft = window.innerWidth - imageElement.offsetLeft
        
        console.log("🚀 ~ AboutComponent ~ imageElement.addEventListener ~ imageLeft:", imageLeft)
       
        //quase entendendo
        const x_ci = (imageElement.clientWidth / 2) + imageLeft
       
        const y_ci = (imageElement.clientHeight / 2) + imageElement.scrollTop

        //onde o usuario passa o mouse
        const x_c = e.clientX
        const y_c = e.clientY

        //variaveis
        this.isMouseEventMen = true;
        this.isMouseEvent = true
        this.image = imageSrc

        //setando os valores do cursos
        this.cursorService.setCursor({
          x_c,
          y_c,
          x_ci,
          y_ci
        })
      })

      imageElement?.addEventListener('mouseleave', () => {
        this.isMouseEventMen = false;
        this.isMouseEvent = false
        this.image = ''
      });
    })
  }
}