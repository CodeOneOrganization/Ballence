
import { CommonModule } from '@angular/common';
import {  AfterViewInit, Component } from '@angular/core';
import { MarqueeComponent } from "../../components/marquee/marquee.component";
import { CursorInteractiveSlideComponent } from "../../components/cursor-interactive-slide.component/cursor-interactive-slide.component";

@Component({
  selector: 'app-about',
  imports: [MarqueeComponent, CursorInteractiveSlideComponent, CommonModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent implements AfterViewInit {

  isMouseEvent: boolean = false;
  image!: string

  ngAfterViewInit(): void {
    this.menMouseEvent()
    this.womanMouseEvent()

    const aboutRef = document.getElementById('about');
    aboutRef?.addEventListener('mouseenter', () => {
      this.isMouseEvent = false

      this.image = ''
    });

    aboutRef?.addEventListener('mouseleave', () => {
      this.isMouseEvent = false;

      this.image = ''
    });
  }

  menMouseEvent(): void{
    const ref = document.getElementById('test');
 
    ref?.addEventListener('mousemove', () => {
  
      this.isMouseEvent = true
  
      this.image = '/men.jpg'
    });
    
  }

  womanMouseEvent(): void{
    const ref = document.getElementById('woman');

    ref?.addEventListener('mousemove', () => {
      this.isMouseEvent = true
   
      this.image = '/woman.jpg'
    });
  }
}