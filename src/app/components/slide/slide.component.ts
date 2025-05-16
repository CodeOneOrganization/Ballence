import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { IProducts } from '../../model/Product.model';
import { CardComponent } from '../card/card.component';
import { LoadingComponent } from "../loading/loading.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule, CardComponent, LoadingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent implements OnInit{

  @Input() Products!: IProducts[] | null
  private windowWidth = window.innerWidth
  public slides = this.windowWidth <= 500 ? 2 : 4


  teste(){
    console.log(this.Products)
  }
  ngOnInit(): void {
      this.teste()

      console.log(this.windowWidth)
  }
}
