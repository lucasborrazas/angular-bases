import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ //es el decorador que le dice a Angular que es un servicio.
  providedIn: 'root'})//si no trabajamos con providedIn root, hay que definir el servicio en la parte de providers. Dejandolo asi, nuestro servicio es un singleton en toda la app al ser mediante injectable. se tiene el valor tal como está en ese momento
export class DbzService {//aca queremos tener la data a manejar

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
  ];

  addcharacter(character: Character):void{
    const newCharacter: Character = { id: uuid(), ...character }; //toma todas las propiedades con los ...
    this.characters.push(newCharacter);
  }

  //onDeleteCharacter( id:number ){
   // this.characters.splice(id, 1);
   deleteCharacterById (id: string ) {
    this.characters = this.characters.filter( character => character.id !== id);

  }



}
