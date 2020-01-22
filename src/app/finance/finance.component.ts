import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  canvas_earning_per_month: any;
  ctx_earning_per_month: any;
  canvas: any;
  ctx: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.canvas_earning_per_month = document.getElementById('earning_per_month');
    this.ctx_earning_per_month = this.canvas_earning_per_month.getContext('2d');
    let myChart = new Chart(this.ctx_earning_per_month, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Earned',
          borderColor: '#D80303',
          backgroundColor: '#D80303',
          data: [589, 445, 483, 503, 689, 692, 634],
        }]
      },
      options: {
        responsive: false,
        display: true
      }
    });

    this.canvas = document.getElementById('profit_loss');
    this.ctx = this.canvas.getContext('2d');
    let myChart2 = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Earning',
          borderColor: '#D80303',
          data: [600, 445, 300, 503, 689, 600, 400],
        },
        {
          label: 'Payments',
          borderColor: '#CBA135',
          data: [300, 0, 200, 323, 100, 50, 100],
        }]
      },
      options: {
        responsive: false,
        display: true
      }
    });
  }

}
