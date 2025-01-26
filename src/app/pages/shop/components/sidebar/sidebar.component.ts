import { Component, ViewChild, ElementRef } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
   @ViewChild('aside') aside!: ElementRef
   @ViewChild('filters') filters!: ElementRef

    private isOpen!: boolean

   openFilter(){

    gsap.to(this.filters.nativeElement,{
      paddingLeft: this.isOpen ? '1.45vw' : '15vw',
      duration: 1,
      ease: 'power2.inOut'
    });

    gsap.to(this.aside.nativeElement,{
      x: this.isOpen ? "-100%" : "0%",
      duration: 1,
      ease: 'power2.inOut',
    })
    this.setIsOpen()

    gsap.to(this.filters.nativeElement,{
      color: this.isOpen ? '#B6E02A' : '#0b5294', 
      duration: 1,
      ease: "power2.inOut"
    })
   }

   setIsOpen(){
    this.isOpen = !this.isOpen
   }
}
