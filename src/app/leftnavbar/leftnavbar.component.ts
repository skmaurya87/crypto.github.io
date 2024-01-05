import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service'

@Component({
  selector: 'app-leftnavbar',
  templateUrl: './leftnavbar.component.html',
  styleUrls: ['./leftnavbar.component.css'],
  providers: [MyserviceService]
})
export class LeftnavbarComponent implements OnInit {
  constructor( ) { }
  status: boolean = false;
  show:boolean;
 

  ngOnInit() {   
  }

  

}
