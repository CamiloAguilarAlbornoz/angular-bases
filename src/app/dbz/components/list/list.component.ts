import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[];
  @Output()
  public indexCharacterEmitter: EventEmitter<string>;

  constructor() {
    this.characterList = [];
    this.indexCharacterEmitter = new EventEmitter();
  }

  public emitIndexCharacter(idCharacter?: string): void {
    if (idCharacter) {
      this.indexCharacterEmitter.emit(idCharacter);
    }
  }
}
