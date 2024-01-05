import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.css']
})
export class ActiveOrdersComponent implements OnInit { 
  
    highcharts = Highcharts;
    chartOptions = {   
       chart : {
          plotBorderWidth: null,
          plotShadow: false
       },

       tooltip : {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       },
       plotOptions : {
          pie: {
             allowPointSelect: true,
             cursor: 'pointer',
             dataLabels: {
                enabled: true,
                // format: '{point.name}%: {point.percentage:.1f} %',
                format: '{point.name}',
             },
             showInLegend: true
          }
       },
       legend: {
         itemMarginTop: 12,
         itemMarginBottom: 12,
         symbolHeight: 11,
         symbolRadius: 0,
        itemStyle: {
          fontWeight: '400',
      },
        align: 'left',
        layout: 'vertical',
        verticalAlign: 'top',
        x: 0,
        y: 10
        
    },
       series : [{
        minPointSize: 5,
        innerSize: '60%',
        zMin: 0,
          type: 'pie',
          legend : 'true',
          name: 'Currency value',
          data: [
             ['Bitcoin',   30],
             ['ETHERUM',       15],
            //  {
            //     name: 'Chrome',
            //     y: 12.8,
            //     sliced: true,
            //     selected: true
            //  },
             ['ZCASH',    15],
             ['PEERCOIN',     10],
             ['Litecoin',     15],
             ['Dash',     15]
          ],
          dataLabels: {
            style:{
               fontWeight: 'normal'
            }
        }
       }]
    };

   data : any;

  sortby :any;

  constructor() { 
    this.sortby = [
      {label:'sort by', value:null},
      {label:'1 Days', value:{id:1, name: '1 Days'}},
      {label:'7 Days', value:{id:2, name: '7 Days'}},
      {label:'15 Days', value:{id:3, name: 'Lon15 Days'}},
      {label:'1 Month', value:{id:4, name: '1 Month'}},
      {label:'3 Month', value:{id:5, name: '3 Month'}}
  ];
  }


  ngOnInit() {
  }

}
