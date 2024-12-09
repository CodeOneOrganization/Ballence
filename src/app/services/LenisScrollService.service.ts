import { Injectable, OnDestroy } from "@angular/core";
import Lenis, { ScrollToOptions } from "lenis";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";

@Injectable({
    providedIn: 'root'
})
export class LenisScrollService implements OnDestroy {

    private lenis!: Lenis;

    public onInit(): void {

        this.lenis = new Lenis({
            autoRaf: true,
            duration: 1.2,
            autoResize: true,

        });

        this.lenis.on('scroll', ScrollTrigger.update)

    }

    ngOnDestroy(): void {
        this.lenis.scrollTo(0, { immediate: true, force: true, duration: 0 })
        this.lenis.destroy()
    }

    public scrollTo(link: string | number, options?: ScrollToOptions): void {
        this.lenis.scrollTo(link, options)
    }

    public pauseLenis(): void {
        this.lenis.stop()
    }

    public startLenis(): void {
        this.lenis.start()
    }

}