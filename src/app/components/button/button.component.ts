import { Component } from '@angular/core';
import { LenisScrollService } from '../../services/LenisScrollService.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  
  constructor(private lenisScrollService: LenisScrollService){}

  onClick(link: string | number): void{
    this.lenisScrollService.scrollTo(link)
  }
}
