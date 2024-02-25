import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // ================ ATRIBUTOS ============
  @Output()
  private emiter : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [];

  // ================ METODOS ELIMINAR ===========
  public onDeleteCharacter(character: Character) : void {
    this.emiter.emit(character.id);
  }
}
