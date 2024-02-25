import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  // ================ ATRIBUTOS ============================
  private charactersList: Character[] = [
    {
      id: uuid(),
      nameCharacter: 'Goku',
      powerCharacter: 5000
    },
    {
      id: uuid(),
      nameCharacter: 'Krilin',
      powerCharacter: 1083
    },
    {
      id: uuid(),
      nameCharacter: 'Piccolo',
      powerCharacter: 1220
    },
    {
      id: uuid(),
      nameCharacter: 'Gohan',
      powerCharacter: 981
    }
  ];

  // ================ METODOS GET ==========================

  public get characters() : Character[] {
    return this.charactersList;
  }

  // ================ METODOS PROPIOS DE CLASE ============
  public onNewCharacter(character: Character) : void {
    const newCharacter : Character = {id: uuid(), ...character}
    this.charactersList.push(newCharacter);
  }

  public deleteCharacter(id: string): void {
    this.charactersList = this.charactersList.filter(character => character.id !== id);
  }
}
