import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import { Chart } from 'angular-highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  ngOnInit(){
    this.pieChartPractice();
    this.highChartsPractice();
  }
  pieChartPractice(){
    Highcharts.chart('container_chart_pie', {
      chart: {
        // type: 'pie',
        // plotBackgroundColor: null,
        // plotBorderWidth: 0,
        // plotShadow: false,
      },
      credits: {
        enabled: false,
      },
      title: {
        text:'200',
        // text: "Testing",
        align: 'left',
        verticalAlign: 'middle',
        y: -120,
        x:46,
        style: {
            fontSize: '12',
        }
      },
      // accessibility: {
      //   point: {
      //       valueSuffix: '%'
      //   }
      // },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
            borderColor: null,
            borderWidth: 0,
            dataLabels: {
                enabled: false,
                // distance: -50,

                style: {
                    fontWeight: 'bold',
                    color: null,

                }
            },
          center: ['10%', '10%'],
          size: '20%',
        }
      },
      series: [{
        type: 'pie',
        name: 'Details',
        innerSize: '70%',
        data: [
          ['category', 1],
          ['Financial', 5],
          ['Sales', 6],
          ['Admin',1 ],
          ['Inactive', 3],
        ]
      }]
    })
   
  }
  semiCirclePractice(){
    
  }


  highChartsPractice(){
    Highcharts.chart('container_chart_pie2', {
      chart: {
        type: 'column',
        zoomType: 'x',//y,xy
      },
     title:{
       text: "Chart"
     },
     tooltip:{
      // animation: false,
      backgroundColor: 'mistyrose',
      borderColor: 'skyblue',
      borderRadius: 20,
      followPointer: true,
      style:{
        color: 'blue',
      }
     },
     credits:{
      // enabled:false,
      position:{
        align: 'left',
        x:20
      },
      style:{
        fontSize: '13px',
        color: 'skyblue',
        fontWeight: 'bold'
      },
      text: 'My custom credit',
      // href: 'https://google.com'
     },
     colors:['pink','lightblue'],
     yAxis:{
      // alternateGridColor: 'lightgreen',
       title: {
         text: 'Fruits eaten'
       }
     },
      xAxis:{
        // alternateGridColor: 'lightgreen',
        categories: ['Apples','Mangoes','Cherries']
      },
      series:[
        {
          name:"Naveen",
          type: 'column',
          data:[1,2,3,],
          // borderRadius: 20,
        },
        {
          name: "Tom",
          type: 'column',
          data: [1,3,2,],
          // borderRadius: 20
        }
      ]
    })
   
  }


}

  
