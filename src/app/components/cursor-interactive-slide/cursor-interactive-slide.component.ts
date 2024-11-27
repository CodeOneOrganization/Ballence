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
  private animationId: number | null = null


  @HostListener("document:mousemove", ["$event"])
  public onMouseMove(event: MouseEvent) {
<<<<<<< HEAD
    this.mouse.x.target = window.innerWidth - event.clientX
    this.mouse.y.target = window.innerHeight - event.clientY
  }

  public onMouseEnterInImage() {
    console.log("onMouseEnterInImage fired")
    const element = document.querySelector<HTMLDivElement>(".cursor-follower")!

    element.classList.add(".visible")
  }

  public onMouseLeaveInImage() {
    const element = document.querySelector<HTMLDivElement>(".cursor-follower")!

    element.classList.add(".hidden")
  }

  ngOnInit(): void {
    this.setX = GSAP.quickSetter(".cursor-follower", "left", "px")
    this.setY = GSAP.quickSetter(".cursor-follower", "top", "px")
=======
    this.mouse.x.target = window.innerWidth - event.clientX ;  
    this.mouse.y.target = window.innerHeight - event.clientY;
>>>>>>> douglas
  }

  ngAfterViewInit(): void {
    this.animate()

    this.setX = GSAP.quickSetter(".cursor-follower", "left", "px")
    this.setY = GSAP.quickSetter(".cursor-follower", "top", "px")
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