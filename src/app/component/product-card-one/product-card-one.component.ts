import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-one',
  templateUrl: './product-card-one.component.html',
  styleUrls: ['./product-card-one.component.scss']
})
export class ProductCardOneComponent  {
  @Input () percentOff: number = 18;  
  @Input () productName: string = "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL"; 
  @Input () src: string = "../../../assets/assets/product-3.png";
  @Input () rating: string = "4.5";
  @Input () currentPrice: string = "4199.00";
  @Input () previousPrice: string = "4299.00";
  @Input () currency: string = "AED";
  @Input () time: string = "19:34:30";
  @Input () countType: string = "hrs";
  @Input () wishList: boolean = true;


  addCart(){
    alert("added to cart");
  }
  buyNow(){
    alert("buy now");
  }
  constructor() { }


}
