import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number) {
    console.log(index);
    this.onDelete.emit(index);
  }
  onDeleteCharacterId(id: string) {
    console.log(id);
    this.onDeleteId.emit(id);
  }
}
