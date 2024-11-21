import { Component } from '@angular/core';
import Lenis from 'lenis';
import { LenisScrollService } from '../../services/LenisScrollService';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private lenisScrollService: LenisScrollService){}

  onClick(link: string): void{
    this.lenisScrollService.scrollTo(link)
  }

}
