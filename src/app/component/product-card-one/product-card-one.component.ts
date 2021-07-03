import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-one',
  templateUrl: './product-card-one.component.html',
  styleUrls: ['./product-card-one.component.scss']
})
export class ProductCardOneComponent  {
  
  @Input () productName: string = ""; 
  
  constructor() { }


}
