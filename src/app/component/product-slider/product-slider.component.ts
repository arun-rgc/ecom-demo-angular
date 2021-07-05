import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {
  sectionTitle="Best Product";
  productList=[
    {
      percentOff: 20,  
      productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
      src: "../../../assets/assets/product-3.png",
      rating: "4.5",
      currentPrice: "4199.00",
      previousPrice: "4299.00",
      currency: "AED",
      time: "19:34:30",
      countType: "hrs",
      wishList: true,
    },
    {
      percentOff: 20,  
      productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
      src: "../../../assets/assets/product-3.png",
      rating: "4.5",
      currentPrice: "1199.00",
      previousPrice: "4299.00",
      currency: "AED",
      time: "19:34:30",
      countType: "hrs",
      wishList: false,
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
