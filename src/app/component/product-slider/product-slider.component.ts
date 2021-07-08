import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {
  @Input()sectionTitle="Best Product";
  @Input()productList=[
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
      percentOff: 10,  
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
    {
      percentOff: 13,  
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
      percentOff: 17,  
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
      percentOff: 8,  
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
      percentOff: 8,  
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
      percentOff: 8,  
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
      percentOff: 8,  
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
  ]
  @Output() cartEvent = new EventEmitter();
  @Output() buyEvent = new EventEmitter();
  addCart(){
    this.cartEvent.emit()
  }
  buyNow(){
    this.buyEvent.emit()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
