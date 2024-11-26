import { Component, OnInit } from '@angular/core';
import Lenis from 'lenis';
import { LenisScrollService } from '../../services/LenisScrollService';
import { IsHomePageService } from '../../services/IsHomePageService';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  isHome!: boolean;

  constructor(
    private lenisScrollService: LenisScrollService, 
    private isHomePageService: IsHomePageService
  ) {}

  ngOnInit(): void {
    this.isHomePageService.verify().subscribe((value) => {
      this.isHome = value
    })
  }

  protected onClick(link: any): void {
    this.lenisScrollService.scrollTo(link)
  }

}
