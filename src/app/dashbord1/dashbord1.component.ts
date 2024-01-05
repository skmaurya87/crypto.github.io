import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord1',
  templateUrl: './dashbord1.component.html',
  styleUrls: ['./dashbord1.component.css']
})
export class Dashbord1Component implements OnInit {
  coinsbtn = [
    {"icon" : "fa-adjust", "txt" : "BTC 11002.52"},
    {"icon" : "fa-registered", "txt" : "ETC 12502.32"},
    {"icon" : "fa-universal-access", "txt" : "PPC 20354.25"},
    {"icon" : "fa-gg-circle", "txt" : "ZEC 25346.28"},
    {"icon" : "fa-adjust", "txt" : "BTC 11002.52"},
    {"icon" : "fa-registered", "txt" : "ETC 12502.32"},
    {"icon" : "fa-universal-access", "txt" : "PPC 20354.25"},
    {"icon" : "fa-gg-circle", "txt" : "ZEC 25346.28"}

  ]
  constructor() { }

  ngOnInit() {
   
  }

}
