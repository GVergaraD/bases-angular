import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  //   styleUrls: ["./app.component.css"]
})
export class MainPageComponent {
  // title = 'dbz-main-page';

  // ngOnInit() {
  //   console.log('AppComponent ngOnInit');
  // }
  constructor(private dbzService: DbzService) {}

  get characters() : Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }


}
