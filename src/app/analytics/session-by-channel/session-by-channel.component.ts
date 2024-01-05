import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-session-by-channel',
  templateUrl: './session-by-channel.component.html',
  styleUrls: ['./session-by-channel.component.css']
})
export class SessionByChannelComponent implements OnInit {
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
