import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})

export class ListComponent {


  @Input('personajes') //Recibir desde el mundo exterior
  public characterList: Character[] = [
    {name: 'Trunks', power:10}
  ]

  //Para emitir información al padre en este caso un numero
  @Output()
  public onDelete = new EventEmitter<string>(); //Number es lo que voy a enviar puede ser clase
  //public onDelete : EventEmitter<number> = new EventEmitter();

  // Dentro cualquier evento coloco this.EVENTO.emit(ARGUMENTO que voy a emviar)
  // onDeleteCharacter(index:number):void {
  //   //TODO: Emitir el ID del personaje
  //   this.onDelete.emit(index);
  // }

  //forma 1
  // onDeleteCharacterById(id:string):void {
  //   //TODO: Emitir el ID del personaje
  //   this.onDelete.emit(id);
  // }

  onDeleteCharacterById(id?:string):void {

    if (!id) return; //Si no tengo un id o es undefinned no se hace nada

    //console.log( { id });
    this.onDelete.emit(id);
  }


}
