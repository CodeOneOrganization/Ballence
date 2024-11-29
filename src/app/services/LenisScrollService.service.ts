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

    
    }

    public scrollTo(link: string): void{
        this.lenis.scrollTo(link)
    }
    
    public pauseLenis(): void{
        this.lenis.stop()
    }

    public startLenis(): void{
        this.lenis.start()
    }
    
}