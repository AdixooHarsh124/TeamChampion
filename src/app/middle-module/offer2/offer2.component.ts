import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-offer2',
  templateUrl: './offer2.component.html',
  styleUrls: ['./offer2.component.css']
})
export class Offer2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      },
    },
    nav: true
  }

}
