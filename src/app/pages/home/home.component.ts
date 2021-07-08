import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerList = [
    {
      src:"../../../assets/assets/banner-1.png",
      alt:"banner"
    },
    {
      src:"../../../assets/assets/banner-1.png",
      alt:"banner"
    },
    {
      src:"../../../assets/assets/banner-1.png",
      alt:"banner"
    },
  ]
  deals=[
    {
      title: "Deal of the day",
      path: "/demo",
      adds:[
        {
          src:"../../../assets/assets/add-2.png"
        }
      ],
      deals:[
        
        {
          src:"../../../assets/assets/1.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/2.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/1.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/2.png",
          item:"Antique Planter's Chair (Brown)"
        },
      ],
    },
    {
      title: "Deal of the year",
      path: "/demo",
      adds:[
        {
          src:"../../../assets/assets/add-2.png"
        }
      ],
      deals:[
        
        {
          src:"../../../assets/assets/1.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/2.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/1.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/2.png",
          item:"Antique Planter's Chair (Brown)"
        },
      ],
    },
    {
      title: "Deal of the day",path: "/demo",
      adds:[
        {
          src:""
        }
      ],
      deals:[
        {
          src:"../../../assets/assets/1.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/2.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/1.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/2.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/1.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/2.png",
          item:"Antique Planter's Chair (Brown)"
        },
      ],
    },
    {
      title: "Deal of the day",path: "/demo",
      adds:[
        {
          src:""
        }
      ],
      deals:[
        {
          src:"../../../assets/assets/1.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/2.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/1.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/2.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/1.png",
          item:"Antique Planter's Chair (Brown)"
        },
        {
          src:"../../../assets/assets/2.png",
          item:"Antique Planter's Chair (Brown)"
        },
      ],
    }
  ]

  best={
    sectionTitle:"Best offers",
    productList:[
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
      }
    ]
  }
  today={
    sectionTitle:"Todays Deals",
    productList:[
      {
        percentOff: 0,  
        productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
        src: "../../../assets/assets/product-3.png",
        rating: "4.5",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "hrs",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
        src: "../../../assets/assets/product-3.png",
        rating: "4.5",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "hrs",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
        src: "../../../assets/assets/product-3.png",
        rating: "4.5",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "hrs",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
        src: "../../../assets/assets/product-3.png",
        rating: "4.5",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "hrs",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
        src: "../../../assets/assets/product-3.png",
        rating: "4.5",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "hrs",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
        src: "../../../assets/assets/product-3.png",
        rating: "4.5",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "hrs",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
        src: "../../../assets/assets/product-3.png",
        rating: "4.5",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "hrs",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
        src: "../../../assets/assets/product-3.png",
        rating: "4.5",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "hrs",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
        src: "../../../assets/assets/product-3.png",
        rating: "4.5",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "hrs",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
        src: "../../../assets/assets/product-3.png",
        rating: "4.5",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "hrs",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine  A65A4002VS/TL", 
        src: "../../../assets/assets/product-3.png",
        rating: "4.5",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "hrs",
        wishList: true,
      },
    ]
  }
  similar={
    sectionTitle:"Similiar items from your cart",
    productList:[
      {
        percentOff: 0,  
        productName: "", 
        src: "../../../assets/assets/product-3.png",
        rating: "",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "", 
        src: "../../../assets/assets/product-3.png",
        rating: "",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "", 
        src: "../../../assets/assets/product-3.png",
        rating: "",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "", 
        src: "../../../assets/assets/product-3.png",
        rating: "",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "", 
        src: "../../../assets/assets/product-3.png",
        rating: "",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "", 
        src: "../../../assets/assets/product-3.png",
        rating: "",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "", 
        src: "../../../assets/assets/product-3.png",
        rating: "",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "",
        wishList: true,
      },
      {
        percentOff: 0,  
        productName: "", 
        src: "../../../assets/assets/product-3.png",
        rating: "",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "",
        wishList: true,
      },{
        percentOff: 0,  
        productName: "", 
        src: "../../../assets/assets/product-3.png",
        rating: "",
        currentPrice: "4199.00",
        previousPrice: "4299.00",
        currency: "AED",
        time: "",
        countType: "",
        wishList: true,
      },

    ]
  }
  
  addCart(){
    alert("added to cart home");
  }
  buyNow(){
    alert("buy now home");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
