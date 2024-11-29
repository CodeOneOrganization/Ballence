import GSAP from "gsap"

import { AfterViewInit, Component, HostListener, Input, OnDestroy } from "@angular/core";

@Component({
  templateUrl: "./cursor-interactive-slide.component.html",
  imports: [],
  standalone: true,
  selector: "app-cursor-interactive-slide",
  styleUrl: "./cursor-interactive-slide.component.scss",
})

export class CursorInteractiveSlideComponent implements OnDestroy, AfterViewInit {

  @Input() imgSrc!: string;

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
  private setX!: Function
  private setY!: Function
  private width!: number
  private height!: number
  private animationId: number | null = null
  left!: number;
  top!: number;
  x_ci!: number;
  y_ci!: number;


  @HostListener("document:mousemove", ["$event"])
  public onMouseMove(event: MouseEvent) {
    const x_c = event.clientX
    const y_c = event.clientY

    this.mouse.x.target = this.x_ci - (x_c - this.x_ci);
    this.mouse.y.target = this.y_ci - (y_c - this.y_ci);
  }

  ngAfterViewInit(): void {
    this.animate()

    this.setX = GSAP.quickSetter(".cursor-follower", "left", "px")
    this.setY = GSAP.quickSetter(".cursor-follower", "top", "px")

    const cursorSlider = document.querySelector<HTMLDivElement>(".cursor-follower")!

    this.width = cursorSlider.offsetWidth
    this.height = cursorSlider.offsetHeight
    this.left = cursorSlider.offsetLeft
    this.top = cursorSlider.offsetTop

    this.x_ci = (this.width / 2 + this.left)
    this.y_ci = (this.height / 2 + this.top)
  }

  public animate() {
    this.mouse.x.current = GSAP.utils.interpolate(this.mouse.x.current, this.mouse.x.target, this.mouse.x.ease)
    this.mouse.y.current = GSAP.utils.interpolate(this.mouse.y.current, this.mouse.y.target, this.mouse.y.ease)
    
 
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