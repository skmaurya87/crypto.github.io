import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-crypto-market',
  templateUrl: './crypto-market.component.html',
  styleUrls: ['./crypto-market.component.css']
})
export class CryptoMarketComponent implements OnInit {
  carouselOptions = {
    margin: 25,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsiveClass: true,
    // loop:true,
    responsive: {
      0: {
        items: 3,
        nav: true
      },
      600: {
        items: 3,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,

      },
      1500: {
        items: 4,
        nav: true,

      }
    }
  }

  images = [
    {text: "BTC",},
    {text: "XRP",},
    {text: "ETH",},
    {text: "ZEC",},
    {text: "PPC",},
    {text: "CPT",},
    {text: "ERP",},
    {text: "CYP",},
    {text: "ZHS",}
  ]
  tabledata : any;
  constructor() {
    this.tabledata = [
      {"country" : "United Kingdom", "value":"8767.70" , "position" : "+17.25%",  "volume": "7.67%"},
      {"country" : "United State", "value":"4867.90" , "position" : "-9.15%",  "volume": "9.67%"},
      {"country" : "Australia", "value":"7538.60" , "position" : "+32.25%",  "volume": "12.55%"},
      {"country" : "Netharlands", "value":"4256.70" , "position":"+18.25%",  "volume": "11.67%"},
      {"country" : "Russia", "value":"7253.56" , "position":"+8.29%",  "volume": "14.67%"},
      {"country" : "Bangladesh", "value":"4658.52" , "position":"+5.18%",  "volume": "10.63%"},
      {"country" : "India", "value":"7567.70" , "position":"+33.25%",  "volume": "13.57%"},
      {"country" : "China", "value":"2336.70" , "position":"+7.24%",  "volume": "11.62%"},
     ]
   }
  ngOnInit() {
    $(document).ready(function(){
    $('#posi tbody tr').each(function() {
      var len = $(this).find(".position-td").text().length;    
      if(len < 7){
          $(this).find(".position-td").addClass("text-danger");
      }
      else{
          $(this).find(".position-td").addClass("text-success");
      }
  });
});
  }

}
