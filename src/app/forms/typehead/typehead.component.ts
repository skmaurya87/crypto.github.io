import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../service/counrtyservices.service'
// import {CountryService} from '../../service/counrtyservices.service';

@Component({
  selector: 'app-typehead',
  templateUrl: './typehead.component.html',
  styleUrls: ['./typehead.component.css']
})
export class TypeheadComponent implements OnInit {
  country: any;
  countries: any[];
  filteredCountriesSingle: any[];
  filteredCountriesMultiple: any[];
  brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];
  filteredBrands: any[];
  brand: string;


  val1: number;
  val2: number = 5;
  val3: number;
  val4: number = 5;
  val5: number;
  msg: string;
  handleRate(event) {
  this.msg = "You have rated " + event.value;
  }

  handleCancel(event) {
  this.msg = "Rating Cancelled";
  }



  constructor(private countryService: CountryService) { }

  filterCountrySingle(event) {
    let query = event.query;        
    this.countryService.getCountries().then(countries => {
        this.filteredCountriesSingle = this.filterCountry(query, countries);
    });
}

filterCountryMultiple(event) {
    let query = event.query;
    this.countryService.getCountries().then(countries => {
        this.filteredCountriesMultiple = this.filterCountry(query, countries);
    });
}

filterCountry(query, countries: any[]):any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    for(let i = 0; i < countries.length; i++) {
        let country = countries[i];
        if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }
    return filtered;
}
    
filterBrands(event) {
    this.filteredBrands = [];
    for(let i = 0; i < this.brands.length; i++) {
        let brand = this.brands[i];
        if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredBrands.push(brand);
        }
    }
}





  ngOnInit() {
    // this.letNewss();
  }

  // letNewss()
  // {
  //   let url="../../assets/data-folder/countries.json";
  //   this.http.get(url)
  //   .subscribe(res=>
  //   {
  //     console.log(res)
  //     this.resData=res;
  //     this.country=res=this.resData.data;
  //   },err=>
    
  // {
  //   console.log(err)
  // })
  
  // }

}
