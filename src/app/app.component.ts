import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService]
})
export class AppComponent implements OnInit {
  
  title = 'cripto';
  text:string;
  constructor(private _Customservice:MyserviceService) {}

  ngOnInit() {
    this.text=this. _Customservice.display();
  }

}

