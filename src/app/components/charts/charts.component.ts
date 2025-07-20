import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  
})
export class ChartsComponent {
  lineData = [
    {
      name: 'Ventas',
      series: [
        { name: 'Enero', value: 5000 },
        { name: 'Febrero', value: 7000 },
        { name: 'Marzo', value: 6000 }
      ]
    }
  ];

  barData = [
    { name: 'Producto A', value: 100 },
    { name: 'Producto B', value: 150 },
    { name: 'Producto C', value: 80 }
  ];

  view: [number, number] = [700, 300];
}