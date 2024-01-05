import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-all-charts',
  templateUrl: './all-charts.component.html',
  styleUrls: ['./all-charts.component.css']
})
export class AllChartsComponent implements OnInit {
  legendBackgroundColor: any;
  theme :any;



  highcharts = Highcharts;
  chartOptions = {   
    chart: {
       type: 'column'
    },
    title: {
       text: 'Bar chart with negative values'
    },
    yAxis:{
       categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']        
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

 chartOptions2 = {   
  chart: {
    type: 'bar'
  },
  title: {
     text: 'Historic World Population by Region'
  },
  subtitle : {
     text: 'Source: Wikipedia.org'  
  },
  legend : {
     layout: 'horizontal',
     align: 'bottom',
     verticalAlign: 'top',
     x: 250,
     y: 100,
     floating: true,
     borderWidth: 1,
     backgroundColor:  '#FFFFFF'
     },
     xAxis:{
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
        text: null
     } 
  },
  yAxis : {
     min: 0, title: {
        text: 'Population (millions)', align: 'high'
     },
     labels: {
        overflow: 'justify'
     }
  },
  tooltip : {
     valueSuffix: ' millions'
  },
  plotOptions : {
     bar: {
        dataLabels: {
           enabled: true
        }
     },
     series: {
        stacking: 'normal'
     }
  },
  credits:{
     enabled: false
  },
  series: [
     {
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
     }, 
     {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
     }, 
     {
        name: 'Year 2008',
        data: [973, 914, 4054, 732, 34]      
     }
  ]
};

chartOptions3 = {   
  chart : {
     plotBorderWidth: null,
     plotShadow: false
  },
  title : {
     text: 'Browser market shares at a specific website, 2014'   
  },
  tooltip : {
     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions : {
     pie: {
        allowPointSelect: true,
        cursor: 'pointer',
  
        dataLabels: {
           enabled: false           
        },
  
        showInLegend: true
     }
  },
  series : [{
     type: 'pie',
     name: 'Browser share',
     data: [
        ['Firefox',   45.0],
        ['IE',       26.8],
        {
           name: 'Chrome',
           y: 12.8,
           sliced: true,
           selected: true
        },
        ['Safari',    8.5],
        ['Opera',     6.2],
        ['Others',      0.7]
     ]
  }]
};


chartOptions4 = {         
  chart : {
     zoomType: 'xy'
  },
  title : {
     text: 'Source: WorldClimate.com'   
  },   
  subtitle : {
     text: 'Average Monthly Temperature and Rainfall in Tokyo'
  },
  xAxis : {
     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
     crosshair: true
  },
  yAxis : [
     { // Primary yAxis
        labels: {
           format: '{value}\xB0C',
              style: {
                 color: Highcharts.getOptions().colors[1]
              }
        },
        title: {
           text: 'Temperature',
           style: {
              color: Highcharts.getOptions().colors[1]
           }
        }
     }, 
     { // Secondary yAxis
        title: {
           text: 'Rainfall',
           style: {
              color: Highcharts.getOptions().colors[0]
           }
        },
        labels: {
           format: '{value} mm',
           style: {
              color: Highcharts.getOptions().colors[0]
           }
        },
        opposite: true
     }
  ],
  tooltip: {
     shared: true
  },
  legend: {
     layout: 'vertical',
     align: 'left',
     x: 60,
     verticalAlign: 'top',
     y: 100,
     floating: true,
     backgroundColor: '#FFFFFF'
  },
  series : [
     {
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
                216.4, 194.1, 95.6, 54.4],
        tooltip: {
           valueSuffix: ' mm'
        }
     }, 
     {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
           valueSuffix: '\xB0C'
        }
     }
  ]
};


  constructor() { }

  ngOnInit() {
  }

}
