import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $;



@Component({
  selector: 'app-active-orders-full',
  templateUrl: './active-orders-full.component.html',
  styleUrls: ['./active-orders-full.component.css']
})

export class ActiveOrdersFullComponent implements OnInit {
 sortby : any;
//  cols : any[];
 synctable: any;
 sales: any[];
 resData: any;
 tradehistroy:any;
  

constructor(private http: HttpClient) {  
  this.sortby = [
    {label:'sort by', value:null},
    {label:'1 Days', value:{id:1, name: '1 Days'}},
    {label:'7 Days', value:{id:2, name: '7 Days'}},
    {label:'15 Days', value:{id:3, name: 'Lon15 Days'}},
    {label:'1 Month', value:{id:4, name: '1 Month'}},
    {label:'3 Month', value:{id:5, name: '3 Month'}}
]; 
}


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













  // 
  // resData: any;
  // letNews: any;
  // tradehistroy: any;
  // 

