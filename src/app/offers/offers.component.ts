// offers.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  image1 = '../../assets/images/offer1.png';
  destination1 = 'Chicago';
  price1 = '\$600';

  image2 = '../../assets/images/offer2.png';
  destination2 = 'Porto';
  price2 = '\$600';

  image3 = '../../assets/images/offer3.png';
  destination3 = 'Chicago';
  price3 = '\$600';

  constructor() { }

  ngOnInit() {
  }
}
