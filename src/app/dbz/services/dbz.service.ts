import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'; // Permite generar identificadores

@Injectable({ // Indica que es un servicio y que es inyectable
  providedIn: 'root' //Indica que el serivico es un singleton en toda la app
})
export class DbzService {

  public characters: Character[] = [
    {
      idCharacter: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      idCharacter: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      idCharacter: uuid(),
      name: 'Vegeta',
      power: 18000
    }
  ];

  public addCharacter(character: Character): void {
    const newCharacter: Character = {
      idCharacter: uuid(),
      ...character
    };
    this.characters.push(newCharacter);
  }

  public deleteCharacterById(idCharacter: string): void {
    /*
    Retorna en un nuevo arreglo todos los elementos que cumplen la condicion
    */
    this.characters = this.characters.filter(character => character.idCharacter !== idCharacter);
  }

}
