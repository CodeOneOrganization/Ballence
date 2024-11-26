import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { MarqueeComponent } from "../../components/marquee/marquee.component";
import gsap from 'gsap';
import { LenisScrollService } from '../../services/LenisScrollService';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, MarqueeComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'] // Corrigido para 'styleUrls'
})
export class HeroComponent implements AfterViewInit { // Corrigido para 'AfterViewInit'

  constructor(private lenisScrollService: LenisScrollService) {}

  onEnterAnimation(): void {

    gsap.to('.hero img', {
      left: '50%',
      top: '50%',
      translateX: '-50%',
      translateY: '-50%',

      ease: "power2.inOut",
      duration: 1.5,
    });

    gsap.to('.hero img', {
      
      width: "100%",
      height: "100%",      
      ease: "power2.inOut",
      
      duration: 1.5,
      delay: 1.6
    });

    gsap.to('.hero-marquee .marquee ', {
      y: 0,
      ease: "power2.inOut",
      
      duration: 2,
      delay: 1.5
    });

    gsap.to('.hero-card ', {
      y: 0,
      ease: "power2.inOut",
      
      duration: 2,
      delay: 1.6
    });
    
  }

  ngAfterViewInit(): void {
    this.onEnterAnimation();
  }
}
