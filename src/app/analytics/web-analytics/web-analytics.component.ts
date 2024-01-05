import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $ :any;


@Component({
  selector: 'app-web-analytics',
  templateUrl: './web-analytics.component.html',
  styleUrls: ['./web-analytics.component.css']
})
export class WebAnalyticsComponent implements OnInit {
  website:any;
  filter:any;

  
  constructor(private http: HttpClient) { 
    this.website = [
      {label:'Select a Website', value:null},
      {label:'www.example.com', value:{id:1, name: 'www.example.com'}},
      {label:'www.example2.com', value:{id:2, name: 'www.example2.com'}},
    ];
    this.filter = [
      {label:'Filter by Date', value:null},
      {label:'Last One Weak', value:{id:1, name: 'Last one weak'}},
      {label:'Last 15 days', value:{id:2, name: 'last 15 days'}},
    ];
  }

  ngOnInit() {
  }

}
