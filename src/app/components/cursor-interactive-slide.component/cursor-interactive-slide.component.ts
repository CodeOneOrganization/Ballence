import GSAP from "gsap"

import { Component, HostListener, OnDestroy } from "@angular/core";

@Component({
  templateUrl: "./cursor-interactive-slide.component.html",
  imports: [],
  standalone: true,
  selector: "app-cursor-interactive-slide",
  styleUrl: "./cursor-interactive-slide.component.scss",
})

export class CursorInteractiveSlideComponent implements OnDestroy {
  private mouse = {
    x: {
      current: 0,
      target: 0,
      ease: 0.1
    }, y: {
      current: 0,
      target: 0,
      ease: 0.1
    }
  }
  private setX = GSAP.quickSetter(".cursor-follower", "left", "px")
  private setY = GSAP.quickSetter(".cursor-follower", "top", "px")
  private animationId: number | null = null


  @HostListener("document:mousemove", ["$event"])
  public onMouseMove(event: MouseEvent) {
    this.mouse.x.target = event.clientX
    this.mouse.y.target = event.clientY
    
    console.log("onMouseMove fired")
  }

  ngOnInit(): void {
    this.animate()
  }

  public animate() {
    this.mouse.x.current = GSAP.utils.interpolate(this.mouse.x.current, this.mouse.x.target, this.mouse.x.ease)
    this.mouse.y.current = GSAP.utils.interpolate(this.mouse.y.current, this.mouse.y.target, this.mouse.y.ease)
    console.log("🚀 ~ CursorInteractiveSlideComponent ~ animate ~ this.mouse.y.current :", this.mouse.y.current )
    console.log("🚀 ~ CursorInteractiveSlideComponent ~ animate ~ this.mouse.x.current :", this.mouse.x.current )
    
    console.log()
    this.setX(this.mouse.x.current)
    this.setY(this.mouse.y.current)
    
    this.animationId = requestAnimationFrame(() => this.animate())
  }

  public ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  }
}