import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-store',
  templateUrl: './personal-store.component.html',
  styleUrls: ['./personal-store.component.scss']
})
export class PersonalStoreComponent implements OnInit {
  storeBG = "../../../assets/assets/personalised-bg.png";
  storeTitle = "Your Personalised Store";
  personalStore = [
    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },
    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },
    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },
    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },

    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },
    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },
    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },
    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },
    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },
    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },
    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },
    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },
    {
      itemSrc:"../../../assets/assets/product-3.png",
      itemAlt:"shampoo"
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
