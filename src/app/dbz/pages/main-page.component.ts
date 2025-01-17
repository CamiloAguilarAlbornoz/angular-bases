import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  constructor(
    private dbzService: DbzService
  ) {}

  public addCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

  public deleteCharacter(idCharacter: string): void {
    this.dbzService.deleteCharacterById(idCharacter);
  }

  public get characters(): Character[] {
    return [...this.dbzService.characters];
  }
}
