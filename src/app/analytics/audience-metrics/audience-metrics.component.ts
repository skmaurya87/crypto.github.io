import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-audience-metrics',
  templateUrl: './audience-metrics.component.html',
  styleUrls: ['./audience-metrics.component.css']
})
export class AudienceMetricsComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'area'
  },
  title: {
      text: ''
  },
  subtitle: {
      text: ''
  },
  xAxis: {
      categories: ['12PM', '02PM', '04PM', '06PM', '08PM', '10PM', '00AM', '02AM', '04AM', '06AM', '08AM', '10AM']
  },
  yAxis: {
      title: {
          text: ''
      }
  },
  plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          },
          enableMouseTracking: false
      },
      series: {
        fillOpacity: 0.1
    }
  },
  series: [{
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      color: '#ff815a',
      
  }, {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
      color: '#357ffc'
  }]

  };


   data : any;
   SelectCoins : any;


  constructor() { }

  ngOnInit() {
  }

}
