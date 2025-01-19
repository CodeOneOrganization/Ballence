import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from "../../card/card/card.component";

@Component({
  selector: 'app-fake-cards',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
],
  templateUrl: './fake-cards.component.html',
  styleUrl: './fake-cards.component.scss'
})
export class FakeCardsComponent {
 
  protected arrayOfNumbers: number[] = [1,2,3,4]


}
