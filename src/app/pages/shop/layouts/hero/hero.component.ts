import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {

  @ViewChild('imgHero') img!: ElementRef

  ngAfterViewInit(): void {
      gsap.to(this.img.nativeElement,{
        width: "100%",
        height: '100%',
        duration: 1.5,
        ease: "power2.inOut",
        filter: 'blur(0px)',
      })
  }
}
