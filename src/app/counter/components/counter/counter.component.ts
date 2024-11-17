import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(2)">+2</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy(2)">-2</button>
  `,
})
export class CounterComponent {
  constructor() {}
  public counter: number = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }
  reset(): void {
    this.counter = 0;
  }
  decreaseBy(value: number): void {
    this.counter -= value;
  }
}
