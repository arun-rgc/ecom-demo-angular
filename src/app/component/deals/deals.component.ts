import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
