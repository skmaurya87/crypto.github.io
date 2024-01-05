import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})

export class CoinsComponent implements OnInit {
data : any;
cities: any[];
SelectCoins: any[];
CoinIcon: string;
selectedCar2: string = 'ETHERUM';

coins = [
  {"icon" : "fa-bitcoin" , "coin" : "Bitcoin" , "sm" : "BTC" , "txt" : "1 BTC = $8720.00 USD" , "upd" : "fa-angle-down" , "img" : "../../assets/images/chart1.jpg"},
  {"icon" : "fa-euro" , "coin" : "ETHERUM" , "sm" : "ETH" , "txt" : "1 BTC = $5255.00 USD" , "upd" : "fa-angle-up" , "img" : "../../assets/images/chart2.jpg"},
  {"icon" : "fa-yen" , "coin" : "ZCASH" , "sm" : "ZEC" , "txt" : "1 BTC = $8236.00 USD" , "upd" : "fa-angle-down" , "img" : "../../assets/images/chart3.jpg"},
  {"icon" : "fa-leaf" , "coin" : "PEERCOIN" , "sm" : "PPC" , "txt" : "1 BTC = $5236.00 USD" , "upd" : "fa-angle-up" , "img" : "../../assets/images/chart4.jpg"}
]

  constructor() { 
    this.cities = [
      {name: 'Enable', code: 'enab'},
      {name: 'Disable', code: 'disa'},
  ];
  this.SelectCoins = [
    {label: 'Bitcoin', value: 'Bitcoin'},
    {label: 'ETHERUM', value: 'ETHERUM'},
    {label: 'ZCASH', value: 'ZCASH'},
    {label: 'ZCASH', value: 'ZCASH'}
];

    
  }

  ngOnInit() {
   
    
  }
  

}
