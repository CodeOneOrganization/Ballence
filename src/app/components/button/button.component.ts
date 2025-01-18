import { Component, ElementRef, ViewChild } from '@angular/core';
import { LenisScrollService } from '../../services/LenisScrollService.service';
import gsap from 'gsap';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @ViewChild('content1') content1Ref!: ElementRef
  @ViewChild('content2') content2Ref!: ElementRef

  constructor(private lenisScrollService: LenisScrollService){}

  onMouseEnter(): void{
    gsap.to(this.content1Ref.nativeElement,{
      y: "-100%",
      duration: 0.5,
      ease: "power2.inOut"
    })

    gsap.to(this.content2Ref.nativeElement,{
      y: "-100%",
       duration: 0.5,
      ease: "power2.inOut"
    })
  }

  onMouseLeave(){
    gsap.to(this.content1Ref.nativeElement,{
      y: "0%",
      duration: 0.5,
      ease: "power2.inOut"
    })

    gsap.to(this.content2Ref.nativeElement,{
      y: "0%",
       duration: 0.5,
      ease: "power2.inOut"
    })
  }


  onClick(link: string | number): void{
    this.lenisScrollService.scrollTo(link)
  }
}
