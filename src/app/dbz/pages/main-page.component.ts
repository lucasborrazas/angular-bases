import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ) {}

    get characters(): Character[] {
      return [...this.dbzService.characters]; //para no modifijar la data real, le pongo los ...
    }

    onDeleteCharacter( id: string):void {
      this.dbzService.deleteCharacterById(id)
    }

    onNewCharacter( character: Character) {
      this.dbzService.addcharacter( character );
    }



}
//19/06 arranqué en 71 - servicios. IMPORTANTE: ver el inicio de output para entender teóricamente qué hace
//Tengo que retomar en 80
