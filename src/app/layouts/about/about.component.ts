import GSAP from "gsap"

import { Component, HostListener } from '@angular/core';
import { MarqueeComponent } from "../../components/marquee/marquee.component";
import { CursorInteractiveSlideComponent } from "../../components/cursor-interactive-slide.component/cursor-interactive-slide.component";

@Component({
  selector: 'app-about',
  imports: [MarqueeComponent, CursorInteractiveSlideComponent],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent {
  mouse = { x: 0, y: 0 }

  @HostListener("document:mousemove", ["$event"])
  public onMouseMove(event: MouseEvent) {
    this.mouse.x = event.clientX
    this.mouse.y = event.clientY
  }


}
