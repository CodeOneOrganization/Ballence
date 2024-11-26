import { Component, OnInit } from '@angular/core';
import { LenisScrollService } from '../../services/LenisScrollService';
import { IsHomePageService } from '../../services/IsHomePageService';
import gsap from 'gsap'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit{

  isHome!: boolean;

  constructor(
    private lenisScrollService: LenisScrollService, 
    private isHomePageService: IsHomePageService
  ){}

  ngOnInit(): void {
    this.isHomePageService.verify().subscribe((value)=>{
      this.isHome = value
      console.log('ishome nav' + this.isHome)
    })
  }

  onClick(link: any): void{
    this.lenisScrollService.scrollTo(link)

  }

}
