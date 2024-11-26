import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plato } from '../../../model/plato';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-platos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-platos.component.html',
  styleUrl: './formulario-platos.component.scss'
})
export class FormularioPlatosComponent {
  lastSixDays: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  
  // Día seleccionado por el usuario
  selectedDay: string = '';
  @Input() plato:Plato

  @Output() platoEnvia:EventEmitter<Plato> = new EventEmitter()

  constructor(){
    this.plato = new Plato()
  }

  enviarPlato(){
    this.platoEnvia.emit(this.plato)
    this.limpiarFormularioPlato()
  }

  limpiarFormularioPlato(){
    this.plato = new Plato()
  }
  

}
