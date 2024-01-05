import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  banner: any;
  images: any;
  constructor(private http: HttpClient) { }

  crouselImages()
  {
    let url="assets/data-folder/images-data.json";
    this.http.get(url)
    .subscribe(res=>
    {
      console.log(res)
      this.banner=res;
      this.images=res;
    },err=>
    
  {
    console.log(err)
  })
  
  }


  ngOnInit() {
    this.crouselImages();  
  }

  

}
