import { AfterViewInit, Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { MarqueeComponent } from "../../components/marquee/marquee.component";
import gsap from 'gsap';
import { LenisScrollService } from '../../services/LenisScrollService.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, MarqueeComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'] 
})
export class HeroComponent implements AfterViewInit { 

  constructor(private lenisScrollService: LenisScrollService) {}

  onEnterAnimation(): void {
    
    this.lenisScrollService.pauseLenis()

    const tl = gsap.timeline()

    tl.to('.hero img', {
      left: '50%',
      top: '50%',
      translateX: '-50%',
      translateY: '-50%',

      ease: "power2.inOut",
      duration: 1.5,
    })

    .to('.hero img', {
      width: "100%",
      height: "100%",      
      ease: "power2.inOut",
      duration: 1.5,
    
    }, '+=0.1')

    .to('.hero-marquee .marquee ', {
      y: 0,
      ease: "power2.inOut",
      
      duration: 2,
    
    }, '-=1.5')

    .to('.hero-card ', {
      y: 0,
      ease: "power2.inOut",
      duration: 2,
  
    }, '-=1.8')

    .to('.hero-card-h3-span ', {
      y: 0,
      ease: "power2.inOut",
      stagger: 0.2,
      duration: 2,

      onComplete: ()=>{
        tl.kill();
        this.lenisScrollService.startLenis()
      }
      
    }, '-=1.5');

  }

  ngAfterViewInit(): void {
    this.onEnterAnimation();
  }
}
