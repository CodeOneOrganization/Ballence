import { Component, ElementRef, OnDestroy, ViewChild, Input } from '@angular/core';
import { LenisScrollService } from '../../services/LenisScrollService.service';
import gsap from 'gsap';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnDestroy{

  @ViewChild('content1') content1Ref!: ElementRef
  @ViewChild('content2') content2Ref!: ElementRef
  
  @Input() TextOne!: string
  @Input() TextTwo!: string

  constructor(private lenisScrollService: LenisScrollService) {}

  onMouseEnter(): void {
    gsap.to(this.content1Ref.nativeElement, {
      y: "-100%",
      duration: .7,
      ease: "power2.inOut"
    })

    gsap.to(this.content2Ref.nativeElement, {
      y: "-100%",
      duration: .7,
      ease: "power2.inOut"
    })
    
  }

  onMouseLeave(): void {
    gsap.to(this.content1Ref.nativeElement, {
      y: "0%",
      duration: 0.5,
      ease: "power2.inOut"
    })

    gsap.to(this.content2Ref.nativeElement, {
      y: "100%",
      duration: 0.5,
      ease: "power2.inOut"
    })
    
  }

  onClick(link: string | number): void {
    this.lenisScrollService.scrollTo(link)
  }

  ngOnDestroy(): void {
      gsap.killTweensOf(this.content1Ref.nativeElement)
      gsap.killTweensOf(this.content2Ref.nativeElement)
  }

}
