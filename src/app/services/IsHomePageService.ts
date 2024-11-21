import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class IsHomePageService {

    isHomePage!: boolean;

    constructor(private router: Router) {}

    verify(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            this.router.events.pipe(
                filter(event => event instanceof NavigationEnd)
            ).subscribe((event: NavigationEnd) => {
         
                this.isHomePage = event.urlAfterRedirects === '/';
                observer.next(this.isHomePage);
            });
        });
    }
}
