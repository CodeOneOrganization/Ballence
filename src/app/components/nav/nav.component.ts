import { Component } from '@angular/core';
import { LenisScrollService } from '../../services/LenisScrollService';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(private lenisScrollService: LenisScrollService){}

  onClick(link: string): void{
    this.lenisScrollService.scrollTo(link)
  }

}
