import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  canvas: any;
  ctx: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('bids_chart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Bids Placed',
          borderColor: '#D80303',
          backgroundColor: '#D80303',
          data: [589, 445, 483, 503, 689, 692, 634],
        },
        {
          label: 'Awarded To You',
          borderColor: '#069335',
          backgroundColor: '#069335',
          data: [639, 465, 493, 478, 589, 632, 674],
        },
        {
          label: 'Bids on awarded tasks',
          borderColor: '#0098DB',
          backgroundColor: '#0098DB',
          data: [639, 465, 493, 478, 589, 632, 674],
        }]
      },
      options: {
        responsive: false,
        display: true
      }
    });
  }

}
