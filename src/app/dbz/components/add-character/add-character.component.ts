import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // ================= ATRIBUTOS ================
  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter<Character>();

  public character: Character = {
    nameCharacter : '',
    powerCharacter : 0
  };

  // ================== METODOS DE LA CLASE ==========00
  public emmitCharacter() : void {
    const {nameCharacter} = this.character;
    const {length} = nameCharacter;
    if (length !== 0) {
      this.onNewCharacter.emit(this.character);
    }
    this.character = {nameCharacter: '', powerCharacter: 0};
  }
}
