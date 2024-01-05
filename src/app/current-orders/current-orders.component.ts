import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.css']
})
export class CurrentOrdersComponent implements OnInit {
  resData: any;
  tradehistroy: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.letNewss();
  }
  letNewss()
  {
    let url="../../assets/data-folder/table.json";
    this.http.get(url)
    .subscribe(res=>
    {
      console.log(res)
      this.resData=res;
      this.tradehistroy=res;
    },err=>
    
  {
    console.log(err)
  })
  
  }
}
