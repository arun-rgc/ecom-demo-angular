import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal-card-one',
  templateUrl: './deal-card-one.component.html',
  styleUrls: ['./deal-card-one.component.scss']
})
export class DealCardOneComponent implements OnInit {
  @Input () dealTitle: string = "";
  @Input () path:string = "";
  @Input () adds = [
    {
      src:""
    }
  ]
  @Input () deals = [
    {
      item: "",
      src:'',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
