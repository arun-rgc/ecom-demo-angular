import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
  @Input()deals=[
    {
      title: "",
      path: "",
      adds:[
        {
          src:""
        }
      ],
      deals:[
        
        {
          src:"",
          item:""
        },
      ],
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
