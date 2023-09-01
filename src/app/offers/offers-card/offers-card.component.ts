// offers-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offers-card',
  templateUrl: './offers-card.component.html',
  styleUrls: ['./offers-card.component.scss']
})
export class OffersCardComponent {
  @Input() image: string;
  @Input() destination: string;
  @Input() price: string;

  constructor() {
    this.image ='',
    this.destination= '';
    this.price='';
  }

  ngOnInit() {
  }
}

