import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mozo } from '../../../model/mozo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-mozos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-mozos.component.html',
  styleUrl: './tabla-mozos.component.scss'
})
export class TablaMozosComponent {

  toggleActivo(item: any) {
    const confirmacion = window.confirm('¿Estás seguro de cambiar el estado?');
    if (confirmacion) {
      item.activo = !item.activo;
    }
    
  }

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
