import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-google-analytice',
  templateUrl: './google-analytice.component.html',
  styleUrls: ['./google-analytice.component.css']
})
export class GoogleAnalyticeComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {   
    chart: {
       type: "area"
    },
    title: {
       text: ""
    },
    subtitle: {
       text: ""
    },
    yAxis: {          
       title:{
          text:""
       },
       labels: {
        enabled: false
    },
    gridLineWidth: 0, 
    },
    xAxis: {          
       title:{
          text:""
       },
       labels: {
        enabled: false
    },
    gridLineWidth: 0,
    },
    tooltip: {
       valueSuffix:""
    },
    legend: {
      align: 'left',
      verticalAlign: 'top',
      floating: true,
      x: -15,
      y: 0,
     },
  
    series: [{
      fillOpacity: 0.1,
      color: '#08bf6f',
       name: 'Bounce Rate',
       data: [1.2, 3.3, 4.2, 5.3, 6.7, 7.1, 7.3, 9.1, 8.2]
    }]
 };
  chartOptions1 = {   
    chart: {
       type: "area"
    },
    title: {
       text: ""
    },
    subtitle: {
       text: ""
    },
    yAxis: {          
       title:{
          text:""
       },
       labels: {
        enabled: false
    },
    gridLineWidth: 0, 
    },
    xAxis: {          
       title:{
          text:""
       },
       labels: {
        enabled: false
    },
    gridLineWidth: 0,
    },
    tooltip: {
       valueSuffix:""
    },
    legend: {
      align: 'left',
      verticalAlign: 'top',
      floating: true,
      x: -15,
      y: 0,
     },
  
    series: [{
      fillOpacity: 0.1,
      color: '#fb6436',
       name: 'Time On Site',
       data: [1.2, 3.3, 4.2, 5.3, 6.7, 7.1, 7.3, 9.1, 8.2]
    }]
 };
  constructor() { }

  ngOnInit() {
  }

}
