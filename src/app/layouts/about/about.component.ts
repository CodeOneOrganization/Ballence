import { Component } from '@angular/core';
import { MarqueeComponent } from "../../components/marquee/marquee.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MarqueeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
