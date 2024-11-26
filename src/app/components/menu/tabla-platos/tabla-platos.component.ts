
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Plato } from '../../../model/plato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-platos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-platos.component.html',
  styleUrl: './tabla-platos.component.scss'
})
export class TablaPlatosComponent {

  
  toggleActivo(item: any) {
    const confirmacion = window.confirm('¿Estás seguro de cambiar el estado?');
    if (confirmacion) {
      item.activo = !item.activo;
    }
    
  }
  @Input() listaPlatos: Plato[] = []

  @Output() idPlatoEnvia = new EventEmitter()
  @Output() editarPlatoEnvia = new EventEmitter()
  
  seleccionarPlato(plato:Plato){
    this.editarPlatoEnvia.emit(plato);
  }

  eliminarPlato(id:number){
      const rpta = confirm("¿Desea eliminar el platillo?")
      if(rpta){
        this.idPlatoEnvia.emit(id)
      }
  }
}
