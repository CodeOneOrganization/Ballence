import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../../../components/button/button.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() Name!: string;
  @Input() Price!: string;
  @Input() Description!: string;

}
