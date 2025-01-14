import { Component, OnInit } from '@angular/core';

const DEFAULT_VALUE: number = 10;

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter : {{ counter }}</h3>
    <button (click)="increaseOrDecrease(1)">+1</button>
    <button (click)="increaseOrDecrease(-1)">-1</button>
    <button (click)="increaseOrDecrease()">restore</button>
  `
})

export class CounterComponent implements OnInit {

  public counter : number;

  constructor() {
    this.counter = DEFAULT_VALUE;
  }

  ngOnInit() { }

  public increaseOrDecrease(instruct: number = 0) : void {
    switch (instruct) {
      case 1:
        this.counter++;
        break;
      case -1:
        this.counter--;
        break;
      case 0:
        this.counter = DEFAULT_VALUE;
        break;
    }
  }
}
