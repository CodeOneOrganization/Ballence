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
    private isOpen: boolean = false

   openFilter(){
    gsap.to(this.aside.nativeElement,{
      x: this.isOpen ? "0%" : "-90%",
      duration: 1,
      ease: 'power2.inOut',
    })
    this.setIsOpen()
   }

   setIsOpen(){
    this.isOpen = !this.isOpen
   }
}
