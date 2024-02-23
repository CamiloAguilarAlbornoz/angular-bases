import { Component } from '@angular/core';

const DEFAULT_NAME_HERO : string = 'iron man';
const DEFAULT_AGE_HERO : number = 50;

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  // ================= Atributos =================
  private name: string = DEFAULT_NAME_HERO;
  private age: number = DEFAULT_AGE_HERO;

  // ================= Metodos get y set ======================
  public get nameHero() : string {
    return this.name;
  }

  public get ageHero() : number {
    return this.age;
  }

  public get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  public setNameHero() : void {
    this.name = 'Batman';
  }

  public setAge() : void {
    this.age = 25;
  }

  public restart() : void {
    this.name = DEFAULT_NAME_HERO;
    this.age = DEFAULT_AGE_HERO;
  }

  // ==================== Metodos propios de clase ===========
  public getHeroDescription() : string {
    return `${this.name} - ${this.age}`;
  }

  public isNotChangedName() : boolean {
    return this.name === DEFAULT_NAME_HERO;
  }

  public isNotChangedAge() : boolean {
    return this.age === DEFAULT_AGE_HERO;
  }

  public isDiferent() : boolean {
    return this.name !== DEFAULT_NAME_HERO || this.age !== DEFAULT_AGE_HERO;
  }
}
