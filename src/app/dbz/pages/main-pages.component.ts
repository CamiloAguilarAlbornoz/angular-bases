import { Component } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {

  // ================ ATRIBUTOS ============================
  private titlePage : string = 'DRAGON BALL Z Personajes';

  constructor(
    private dbzService: DbzService
  ) {

  }

  // ================ METODOS GET ==========================
  public get title() : string {
    return this.titlePage;
  }

  public get characters() : Character[] {
    return this.dbzService.characters;
  }

  // ================ METODOS PROPIOS DE CLASE ============
  public onNewCharacter(character: Character) : void {
    this.dbzService.onNewCharacter(character);
  }

  public deleteCharacter(id: string): void {
    this.dbzService.deleteCharacter(id);
  }
}
