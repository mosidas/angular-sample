import { Component, Input, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ChartModel } from './chart-model';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent implements OnInit {
  labels: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  colors: string[] = [
    getRandomRgbaColor(),
    getRandomRgbaColor(),
    getRandomRgbaColor(),
    getRandomRgbaColor(),
    getRandomRgbaColor(),
    getRandomRgbaColor(),
    getRandomRgbaColor(),
  ];
  @Input() data: ChartModel[] = [
    {
      id: 1,
      labels: this.labels,
      data: getRandomData(this.labels),
      color: this.colors[0],
    },
    {
      id: 2,
      labels: this.labels,
      data: getRandomData(this.labels),
      color: this.colors[1],
    },
    {
      id: 3,
      labels: this.labels,
      data: getRandomData(this.labels),
      color: this.colors[2],
    },
    {
      id: 4,
      labels: this.labels,
      data: getRandomData(this.labels),
      color: this.colors[3],
    },
    {
      id: 5,
      labels: this.labels,
      data: getRandomData(this.labels),
      color: this.colors[4],
    },
    {
      id: 6,
      labels: this.labels,
      data: getRandomData(this.labels),
      color: this.colors[5],
    },
  ];

  public barChartOptions: ChartConfiguration['options'] = {
    color: 'rgba(255,255,255,0.7)',
    backgroundColor: 'rgba(64, 47, 47, 0.7)',
    animation: {
      duration: 2500,
      easing: 'easeOutElastic',
      delay: (context) => {
        return context.type === 'data' && context.mode === 'default'
          ? context.dataIndex * 300
          : 0;
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      subtitle: {
        font: {
          size: 35,
          family: 'Arial',
        },
      },
      legend: {
        display: false,
        position: 'right',
        labels: {
          padding: 1,
          boxWidth: 10,
          font: {
            size: 15,
            family: 'Arial',
          },
          borderRadius: 10,
        },
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
        font: {
          size: 5,
          family: 'Arial',
        },
      },
      tooltip: {
        titleFont: { size: 0 },
        bodyFont: { size: 12 },
        titleMarginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.7)',
        titleColor: 'rgba(0,0,0,1)',
        bodyColor: 'rgba(0,0,0,1)',
        displayColors: true,
        xAlign: 'center',
      },
    },
  };

  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: this.data[0].labels,
    datasets: this.data.map((item, index) => ({
      label: 'label' + index,
      data: item.data,
      backgroundColor: item.color,
    })),
  };

  ngOnInit(): void {
    const arbitraryStackKey = 'stack1';
    this.barChartData = {
      labels: this.data[0].labels,
      datasets: this.data.map((item, index) => ({
        label: 'label' + index,
        data: item.data,
        backgroundColor: item.color,
        stack: arbitraryStackKey,
      })),
    };
  }
}

@NgModule({
  imports: [CommonModule, NgChartsModule],
})
export class AppModule {}

function getRandomRgbaColor(): string {
  // RGBAの各値をランダムに生成
  const r = Math.floor(Math.random() * 256); // 赤色の強さは0-255
  const g = Math.floor(Math.random() * 256); // 緑色の強さは0-255
  const b = Math.floor(Math.random() * 256); // 青色の強さは0-255
  const a = (Math.random() * 0.5 + 0.5).toFixed(2); // 不透明度は0.50-1.00 (小数点以下2桁に丸める)

  // `rgba(r, g, b, a)`の形式の文字列を返す
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function getRandomData(labels: string[]): number[] {
  const data: number[] = [];
  for (let i = 0; i < labels.length; i++) {
    data.push(Math.floor(Math.random() * 100));
  }
  return data;
}
