import { Component, OnInit } from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
  }

}