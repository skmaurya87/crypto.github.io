import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-charts',
  templateUrl: './area-charts.component.html',
  styleUrls: ['./area-charts.component.css']
})
export class AreaChartsComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {   
     chart: {
        type: 'area'
     },
     title: {
        text: 'Average fruit consumption during one week'
     },
     subtitle : {
        style: {
           position: 'absolute',
           right: '0px',
           bottom: '10px'
        }
     },
     legend : {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: -150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:  '#FFFFFF'
     },
     xAxis:{
        categories: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] 
     },
     yAxis : {
        title: {
           text: 'Number of units'
        },
        labels: {
           formatter: function () {
              return this.value;
           }
        },
        min:0
     },
     tooltip : {
        formatter: function () {
           return '<b>' + this.series.name + '</b><br/>' +
              this.x + ': ' + this.y;
        }
     },
     plotOptions : {
        area: {
           fillOpacity: 0.5 
        }
     },
     credits:{
        enabled: false
     },
     series: [
        {
           name: 'John',
           data: [3, 4, 3, 5, 4, 10, 12]
        }, 
        {
           name: 'Jane',
           data: [1, 3, 4, 3, 3, 5, 4]
        }
     ]
  };

  chartOptions2 = {   
    chart: {
       type: "area"
    },
    title: {
       text: 'Area chart with negative values'
    },
    xAxis:{
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    credits:{
      enabled: false
    },
    series: [
       {
          name: 'John',
          data: [5, 3, 4, 7, 2]
       }, 
       {
          name: 'Jane',
          data: [2, -2, -3, 2, 1]
       }, 
       {
          name: 'Joe',
          data: [3, 4, 4, -2, 5]
       }
    ]
 };

 chartOptions3 = {   
  chart: {
     type: "area"
  },
  title: {
    text: 'Historic and Estimated Worldwide Population Growth by Region'
  },
  subtitle : {
    text: 'Source: Wikipedia.org'
  },
  xAxis:{
    categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
    tickmarkPlacement: 'on',
    title: {
       enabled: false
    }
  },
  yAxis : {
    title: {
       text: 'Billions'
    },
    labels: {
       formatter: function () {
          return this.value / 1000;
       }
    }
  },
  tooltip : {
    shared: true,
    valueSuffix: ' millions'
  },
  plotOptions : {
    area: {
       stacking: 'normal',
       lineColor: '#666666',
       lineWidth: 1,
       
       marker: {
          lineWidth: 1,
          lineColor: '#666666'
       }
    }
  },
  credits:{
    enabled: false
  },
  series: [
     {
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
     }, 
     {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
     }, 
     {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
     }, 
     {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
     }, 
     {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
     }
  ]
};

chartOptions4 = {   
  chart: {
     type: "area"
  },
  title: {
    text: 'Historic and Estimated Worldwide Population Growth by Region'
  },
  subtitle : {
    text: 'Source: Wikipedia.org'
  },
  xAxis:{
    categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
    tickmarkPlacement: 'on',
    title: {
       enabled: false
    }
  },
  yAxis : {
    title: {
       text: 'Billions'
    },
    labels: {
       formatter: function () {
          return this.value / 1000;
       }
    }
  },
  tooltip : {
    shared: true,
    valueSuffix: ' millions'
  },
  plotOptions : {
    area: {
       stacking: 'percent',
       lineColor: '#666666',
       lineWidth: 1,
       
       marker: {
          lineWidth: 1,
          lineColor: '#666666'
       }
    }
  },
  credits:{
    enabled: false
  },
  series: [
     {
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
     }, 
     {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
     }, 
     {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
     }, 
     {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
     }, 
     {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
     }
  ]
};


  constructor() { }

  ngOnInit() {
  }

}
