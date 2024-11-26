
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

  isMouseEventMen: boolean = false;
  isMouseEventWoman: boolean = false;
  isMouseEvent: boolean = false;
  image!: string

  ngAfterViewInit(): void {
    this.menMouseEvent()
    this.womanMouseEvent()


  }

  menMouseEvent(): void{
    const ref = document.getElementById('test');
    const aboutRef = document.getElementById('about');
 
    ref?.addEventListener('mousemove', () => {
      this.isMouseEventMen = true;
      this.isMouseEvent = true
      console.log('Mouse Move:', this.isMouseEventMen);
      this.image = '/men.jpg'
    });

    aboutRef?.addEventListener('mouseenter', () => {
      this.isMouseEventMen = false;
      this.isMouseEvent = false
      console.log('Mouse Enter:', this.isMouseEventMen);
      this.image = ''
    });

    aboutRef?.addEventListener('mouseleave', () => {
      this.isMouseEventMen = false;
      this.isMouseEvent = false
      console.log('Mouse Leave:', this.isMouseEventMen);
      this.image = ''
    });
    
  }

  womanMouseEvent(): void{
    
    const ref = document.getElementById('woman');
    const aboutRef = document.getElementById('about');
 
    ref?.addEventListener('mousemove', () => {
      
      this.isMouseEventWoman = true;
      this.isMouseEvent = true
      console.log('Mouse Move:', this.isMouseEventWoman);
      this.image = '/woman.jpg'
    });

    aboutRef?.addEventListener('mouseenter', () => {
      
      this.isMouseEventWoman = false;
      if(!this.isMouseEventWoman){
        ref!.style.filter = 'grayscale(0%)';
      }
      this.isMouseEvent = false
      console.log('Mouse Enter:', this.isMouseEventWoman);
      this.image = ''
    });

    aboutRef?.addEventListener('mouseleave', () => {
      this.isMouseEventWoman = false;

      this.isMouseEvent = false;
      console.log('Mouse Leave:', this.isMouseEventWoman);
      this.image = ''
    });
  }
}