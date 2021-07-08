import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card-one',
  templateUrl: './product-card-one.component.html',
  styleUrls: ['./product-card-one.component.scss']
})
export class ProductCardOneComponent  {
  @Input () percentOff: number = 0;  
  @Input () productName: string = "Product name"; 
  @Input () src: string = "../../../assets/assets/product-3.png";
  @Input () rating: string = "5.0";
  @Input () currentPrice: string = "0000.00";
  @Input () previousPrice: string = "0000.00";
  @Input () currency: string = "AED";
  @Input () time: string = "00:00:00";
  @Input () countType: string = "hrs";
  @Input () wishList: boolean = false;

  @Output() cartEvent = new EventEmitter();
  @Output() buyEvent = new EventEmitter();

  addCart(){
    this.cartEvent.emit()
  }
  buyNow(){
    this.buyEvent.emit()
  }
  constructor() { }

}
