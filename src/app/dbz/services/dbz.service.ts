import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root' //para no definir el servicio en la parte de los providers
  //hace un singleton en todo lugar
})
export class DbzService {


  public characters: Character[] =
  [
    { id: uuid(), name:'krilin',  power:1000},
    { id: uuid(), name:'Goku', power:9500},
    { id: uuid(), name:'Vegeta', power:7600}
  ];

  public addCharacter(character:Character):void {
    // console.log("Main Page");
    // console.log(character);
    // const newCharacter: Character={
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }
    const newCharacter: Character={  id:uuid(), ...character}; //se asignan todas las prop como lo anterior pero mas eficiente.

    this.characters.push(newCharacter); //unshift
  }
deleteCharacterbyId(id:string){
  this.characters = this.characters.filter(character => character.id !==id);
}

  // public onDeleteCharacter(index:number) : void {
  //   this.characters.splice(index,1);
  // }


  constructor() { }

}
