import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $ :any;

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {

  resData :any;
  sessions:any;
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
      this.sessions=res;
    },err=>
    
  {
    console.log(err)
  })
  
  }

}
