import GSAP from "gsap"

import { AfterViewInit, Component, HostListener, Input, OnDestroy } from "@angular/core";
import { CursorInteractiveSlideService } from "./cursor-interactive-slide.service";

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
  private animationId: number | null = null
  left!: number;
  top!: number;
  x_ci!: number;
  y_ci!: number;

  constructor(private cursorService: CursorInteractiveSlideService) { }


  @HostListener("document:mousemove", ["$event"])
  public onMouseMove(event: MouseEvent) {
    this.cursorService.setCursor({ x_c: event.clientX })
    this.cursorService.setCursor({ y_c: event.clientY })

    const newX = this.cursorService.x_ci - (this.cursorService.x_c - this.cursorService.x_ci)
    const newY = this.cursorService.y_ci - (this.cursorService.y_c - this.cursorService.y_ci)

    this.mouse.x.target = newX
    this.mouse.y.target = newY
  }

  ngAfterViewInit(): void {
    this.setX = GSAP.quickSetter(".cursor-follower", "left", "px")
    this.setY = GSAP.quickSetter(".cursor-follower", "top", "px")

    this.animate()
  }

  public animate() {
    this.mouse.x.current = GSAP.utils.interpolate(this.mouse.x.current, this.mouse.x.target, this.mouse.x.ease)
    this.mouse.y.current = GSAP.utils.interpolate(this.mouse.y.current, this.mouse.y.target, this.mouse.y.ease)

    this.setX(this.mouse.x.current)
    this.setY(this.mouse.y.current)

    this.animationId = requestAnimationFrame(() => this.animate())
  }

    ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  }
}