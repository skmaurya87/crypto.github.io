import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service'


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  providers: [MyserviceService]
})
export class TopbarComponent implements OnInit {
  status: boolean = false;
  constructor( private _clickService:MyserviceService) { }
 

  ngOnInit() 
  {
    // this.status=this. _clickService.myclick()
    this.status = !this.status;
  }
 
  // clickEvent(){
  //   this.status = !this.status;     
  //   alert("hi")   
  // }

}
