import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mozo } from '../../../model/mozo';

@Component({
  selector: 'app-tabla-mozos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-mozos.component.html',
  styleUrl: './tabla-mozos.component.scss'
})
export class TablaMozosComponent {

  @Input() listaMozos: Mozo[] = []

  @Output() idMozoEnvia = new EventEmitter()
  @Output() editarMozoEnvia = new EventEmitter()
  
  seleccionarMozo(mozo:Mozo){
    this.editarMozoEnvia.emit(mozo);
  }

  eliminarMozo(id:number){
      const rpta = confirm("¿Desea eliminar al Mozo?")
      if(rpta){
        this.idMozoEnvia.emit(id)
      }
  }
}
