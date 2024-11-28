import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LenisScrollService } from '../../services/LenisScrollService';
import { IsHomePageService } from '../../services/IsHomePageService';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit, AfterViewInit {

  isHome!: boolean;

  constructor(
    private lenisScrollService: LenisScrollService, 
    private isHomePageService: IsHomePageService,
  ) {}

  ngOnInit(): void {
    this.isHomePageService.verify().subscribe((value) => {
      this.isHome = value;
      console.log('ishome nav: ' + this.isHome);
    });

 
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: '.nav',
      markers: true,
      start: '814% top',
      end: '814% bottom',
      scrub: true,
      
      onEnter: () => {
        this.animateNavOnScroll()
      },
      onLeave: ()=>{
        
      },
      onEnterBack: () => {
        this.animateNavOnScroll()
      },
      onLeaveBack: ()=>{
     
      }
    })


  }

  protected onClick(link: any): void {
    this.lenisScrollService.scrollTo(link);
  }

  private animateNavOnScroll(): void{

    gsap.to('.nav h1', {
      color: "var(--color-blue)",
    })
    gsap.to('.nav-menu li', {
      color: "var(--color-blue)",
    });
  }
}
