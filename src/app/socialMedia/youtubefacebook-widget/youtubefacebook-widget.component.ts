import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-youtubefacebook-widget',
  templateUrl: './youtubefacebook-widget.component.html',
  styleUrls: ['./youtubefacebook-widget.component.css']
})
export class YoutubefacebookWidgetComponent implements OnInit {
  viewdays:any;
  page:any;

  highcharts = Highcharts;
  chartOptions = {   
    chart: {
      type: 'column'
  },
  title: {
      text: ''
  },
  xAxis: {
      categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      
  },
  credits: {
      enabled: false
  },
  series: [{
      showInLegend: false,
      name: 'John',
      data: [1000, -400, 3500, -700, 2000, -600, 2000]
  }, {
    showInLegend: false,
      name: 'Jane',
      data: [-800, 2000, -600, 2000, -1000, 2000, -1000]
  }, {
    showInLegend: false,
      name: 'Joe',
      data: [3000, -1000, 3000, -900, -1200, 3000, -600]
  },
  {
    showInLegend: false,
    name: 'John',
    data: [1000, -600, 3300, -300, 2000, -1000, 2000]
}, {
  showInLegend: false,
    name: 'Jane',
    data: [-800, 2000, -1000, 2000, -1000, 2000, -1000]
}, {
  showInLegend: false,
    name: 'Joe',
    data: [3000, -1000, 3000, -300, -500, 3000, -400]
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
      color: '#08bf6f',
       name: '',
       showInLegend: false,
       data: [1.2, 3.6, 4.3, 5.1, 6.0, 5.4, 4.7, 3.6, 2.1, 1.1]
    }]
 };
 chartOptions2 = {   
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
     name: '',
     showInLegend: false,
     data: [1.2, 3.3, 4.2, 5.3, 6.7, 5.1, 4.3, 3.1, 2.2, 1.1]
  }]
};


  constructor() { 
    this.viewdays =[
      {label : "1 days", code: "1days"},
      {label : "7 days", code: "7days"},
      {label : "15 days", code: "15days"},
      {label : "1 Month", code: "1month"},
    ];
    this.page =[
      {label : "Facebook Page", code: "page"},
      {label : "Facebook Page1", code: "page1"},
      {label : "Facebook Page2", code: "page2"},
      {label : "Facebook Page3", code: "page3"},
    ];
  }

  ngOnInit() {
  }

}
