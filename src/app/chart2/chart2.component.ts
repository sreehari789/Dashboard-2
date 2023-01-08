import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
   this.chartOptions={
    chart: {
        type: 'bar'
    },
    title: {
        text: 'UEFA CL top scorers by season'
    },
    xAxis: {
        categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Goals'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    credits:{
        enabled:false
        },
    series: [{
        name: 'Cristiano Ronaldo',
        data: [4, 4, 6, 15, 12],
        color:'#fa2d2d'
    }, {
        name: 'Lionel Messi',
        data: [5, 3, 12, 6, 11],
        color:'#1425a8'
    }, {
        name: 'Robert Lewandowski',
        data: [5, 15, 8, 5, 8],
        color:'#14a839'
    }]
}

   
HC_exporting(Highcharts)




}
}
