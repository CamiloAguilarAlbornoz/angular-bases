import { Component } from "@angular/core";

const DEFAULT_VALUE : number = 10;

@Component({
  selector: 'app-counter',
  template: `
    <h3>Veces que desarrollaron al Santiago : {{getCounter()}}</h3>
    <div class="container-btn">
      <button (click)="incrementOrDecrement(1)">+1</button>
      <button (click)="incrementOrDecrement(-1)">-1</button>
      <button (click)="reset()">Restaurar</button>
    </div>
  `,
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  // ================ Atributos ============
  private counter: number = DEFAULT_VALUE;

  // ================ Metodos get y set ========================
  public getCounter() : number {
    return this.counter;
  }

  // ================ Metodos del componente =====================
  public incrementOrDecrement(value: number) : void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = DEFAULT_VALUE;
  }
}
