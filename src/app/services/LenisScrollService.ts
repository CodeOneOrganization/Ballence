import { Injectable } from "@angular/core";
import Lenis from "lenis";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";

@Injectable({
    providedIn: 'root'
})
export class LenisScrollService{
    
    private lenis!: Lenis;

    public onInit(): void {

        this.lenis = new Lenis({
            autoRaf: true,
            duration: 1.2, 
            autoResize: true,
         
        });

        this.lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            this.lenis.raf(time * 1000); 
        });
    }

    public scrollTo(link: string): void{
        this.lenis.scrollTo(link)
    }
    
    
}