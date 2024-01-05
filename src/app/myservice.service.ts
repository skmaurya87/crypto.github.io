import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
 
  constructor() { }
  // status: boolean = false;
  display()
  {
    return "Helo World";
  };

  myclick()
  {
    // this.status = !this.status;     
    alert("hi")   
  }

}
     