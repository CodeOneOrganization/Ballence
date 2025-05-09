import { Component, OnInit } from '@angular/core';
import { GetUserChoiceAboutTheProductService } from '../../../../services/GetUserChoiceAboutTheProduct.service';
import { Observable } from 'rxjs';
import { IProducts } from '../../../../model/Product.model';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../../../components/loading/loading.component";
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LoadingComponent, HttpClientModule, CardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  providers: [GetUserChoiceAboutTheProductService]
})
export class HeroComponent implements OnInit {

  public Choice!: IProducts[] | [];
  constructor(private getUserChoiceAboutTheProduct: GetUserChoiceAboutTheProductService){}

  ngOnInit(): void {

    this.returnChoice()
    
  }

  returnChoice(){
   this.Choice = this.getUserChoiceAboutTheProduct.returnChoice()
   console.log(this.Choice)
  }

}
