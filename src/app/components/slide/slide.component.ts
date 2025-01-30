import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { IProducts } from '../../model/Product.model';
import { CardComponent } from '../card/card/card.component';
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

  @Input() Products!: any
  protected fakeArray: number[] = [1,2,3,4,5,6,7,8]

  teste(){
    console.log(this.Products)
  }
  ngOnInit(): void {
      this.teste()
  }
}
