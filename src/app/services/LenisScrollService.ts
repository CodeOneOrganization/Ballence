import { Injectable } from "@angular/core";
import Lenis from "lenis";

@Injectable({
    providedIn: 'root'
})
export class LenisScrollService{
    
    private lenis!: Lenis;

    public onInit(): void {

        this.lenis = new Lenis({
            autoRaf: true,
            duration: 1.2,

        });

    }

    public scrollTo(link: string): void{
        this.lenis.scrollTo(link)
    }

    
}