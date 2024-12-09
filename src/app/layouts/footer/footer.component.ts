import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LenisScrollService } from '../../services/LenisScrollService.service';
import { IsHomePageService } from '../../services/IsHomePageService.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, AfterViewInit {

  isHome!: boolean;

  constructor(
    private lenisScrollService: LenisScrollService, 
    private isHomePageService: IsHomePageService
  ) {}

  ngOnInit(): void {
    this.isHomePageService.verify().subscribe((value) => {
      this.isHome = value
    })
  }

  ngAfterViewInit(): void {
      gsap.registerPlugin(ScrollTrigger)
      
      ScrollTrigger.create({
        trigger: '.footer',
        start: '0% 50%',
        end: '100% 50%',

        onEnter: ()=> {
          this.AnimationOnScroll()
        }
      })


  }

  private AnimationOnScroll(): void{
    gsap.to('.footer h1 span',{
      y: 0,
      duration: 1.5,
      ease: 'power2.inOut',
    })

    gsap.to('.navigation .links',{
      y: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      stagger: 0.1,
      delay: 1
    })
  }

  protected onClick(link: string | number): void {
    this.lenisScrollService.scrollTo(link)
  }

}
