import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // ============== ATRIBUTOS ===============
  private heroNames : string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Deadpool', 'Thor'];
  private lastHeroNameDeleted? : string;

  // ============== METODOS GET ===============
  public get heros() : string[] {
    return this.heroNames;
  }

  public get lastHeroDeleted() : string {
    return this.lastHeroNameDeleted!;
  }

  public get isEmpty() : boolean {
    return this.heroNames.length === 0;
  }

  // ============== METODOS ================
  public removeLastHero() : void {
    this.lastHeroNameDeleted = this.heroNames.pop()!;
  }
}
