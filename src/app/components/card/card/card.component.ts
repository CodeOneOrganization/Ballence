import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() src!: string
  @Input() alt!: string
  @Input() name!: string
  @Input() price!: string
  @Input() isFake!: boolean

}
