import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-custom-forms',
  templateUrl: './custom-forms.component.html',
  styleUrls: ['./custom-forms.component.css']
})

export class CustomFormsComponent implements OnInit {
  date1: Date;
    date2: Date;
    date3: Date;
    date4: Date;
    date5: Date;
    date6: Date;
    date7: Date;
    date8: Date;
    date9: Date;  
    date10: Date;
    date11: Date;
    date12: Date;
    date13: Date;
    date14: Date;
    dates: Date[];
    rangeDates: Date[];
    minDate: Date;
    maxDate: Date;
    invalidDates: Array<Date>;
    es: any;
    name: string;
    code: string;
    cities: City[];
    selectedCity: City;
    data : any;
    SelectCoins : any;
    cars: any[];
    selectedCar: string;

    cities1: any[];
    cities2: City[];
    selectedCities1: City[];
    selectedCities2: City[];

    country: any;
    countries: any[];
    filteredCountriesSingle: any[];
    filteredCountriesMultiple: any[];
    brands: string[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];
    filteredBrands: any[];
    brand: string;


  constructor() { 



    
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  this.SelectCoins = [
    {label: 'Bitcoin', value: 'Bitcoin'},
    {label: 'ETHERUM', value: 'ETHERUM'},
    {label: 'PEERCOIN', value: 'PEERCOIN'},
    {label: 'ZCASH', value: 'ZCASH'},
 ];
 this.cars = [
  {label: 'Audi', value: 'Audi'},
  {label: 'BMW', value: 'BMW'},
  {label: 'Fiat', value: 'Fiat'},
  {label: 'Ford', value: 'Ford'},
  {label: 'Honda', value: 'Honda'},
  {label: 'Jaguar', value: 'Jaguar'},
  {label: 'Mercedes', value: 'Mercedes'},
  {label: 'Renault', value: 'Renault'},
  {label: 'VW', value: 'VW'},
  {label: 'Volvo', value: 'Volvo'},
];
this.cities1 = [
  {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
  {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
  {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
  {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
  {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
];
  }

  ngOnInit() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
        monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
        today: 'Hoy',
        clear: 'Borrar'
    };
    
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
    
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];

  }

}
