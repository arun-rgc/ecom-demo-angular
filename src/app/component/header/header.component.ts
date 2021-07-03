import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidenav = false;
  constructor() { }

  ngOnInit(): void {
  }


  openNav() {
    this.sidenav = !this.sidenav
  }
  
}
