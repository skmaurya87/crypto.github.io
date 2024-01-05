import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-activity',
  templateUrl: './social-activity.component.html',
  styleUrls: ['./social-activity.component.css']
})
export class SocialActivityComponent implements OnInit {
  viewdays :any;
  constructor() {
    this.viewdays =[
      {label : "1 days", code: "1days"},
      {label : "7 days", code: "7days"},
      {label : "15 days", code: "15days"},
      {label : "1 Month", code: "1month"},
    ]
   }

  ngOnInit() {
  }

}
