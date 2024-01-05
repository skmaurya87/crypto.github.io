import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-followers',
  templateUrl: './social-followers.component.html',
  styleUrls: ['./social-followers.component.css']
})
export class SocialFollowersComponent implements OnInit {
  viewdays :any;
  conversation :any;
  constructor() {
    this.viewdays =[
      {label : "1 days", code: "1days"},
      {label : "7 days", code: "7days"},
      {label : "15 days", code: "15days"},
      {label : "1 Month", code: "1month"},
    ];
    this.conversation = [
      {"source":"Facebook","cv1":"76", "cv2":"64", "avg":"9.12%"},
      {"source":"Twitter", "cv1":"40", "cv2":"10", "avg":"7.65%"},
      {"source":"Linkdin", "cv1":"35", "cv2":"6", "avg":"14.29%"},
      {"source":"Goolge Plus", "cv1":"45", "cv2":"8", "avg":"10.99%"},
      {"source":"Instagram", "cv1":"27", "cv2":"2", "avg":"6.75%"},
      {"source":"You Tube", "cv1":"31", "cv2":"18", "avg":"17.27%"},
    ]
   }

  ngOnInit() {
  }

}
