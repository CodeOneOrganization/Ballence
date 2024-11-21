import { inject, Injectable } from "@angular/core";
import Lenis from "lenis";

@Injectable({
    providedIn: 'root'
})
export class LenisScrollService{
    lenis!: Lenis;

    onInit(): void {

        this.lenis = new Lenis({
            autoRaf: true,
            duration: 1.2,

        });

        this.lenis.on('scroll', (e) => {
            console.log(e);
        });
    }

    scrollTo(link: string): void{
        this.lenis.scrollTo(link)
    }
}