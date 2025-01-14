import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const DEFAULT_NAME = 'iron Man';
const DEFAULT_AGE = 45;

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = DEFAULT_NAME;
  public age : number  = DEFAULT_AGE;

  public get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  public getHeroDescription() : string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero() : void {
    this.name = 'Spider Man';
  }

  public changeAge() : void {
    this.age = 25;
  }

  public reset() : void {
    this.name = DEFAULT_NAME;
    this.age = DEFAULT_AGE;
  }
}
