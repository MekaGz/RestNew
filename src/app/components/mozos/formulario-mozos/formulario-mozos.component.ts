import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mozo } from '../../../model/mozo';

@Component({
  selector: 'app-formulario-mozos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-mozos.component.html',
  styleUrl: './formulario-mozos.component.scss'
})
export class FormularioMozosComponent {

  @Input() mozo:Mozo

  @Output() mozoEnvia:EventEmitter<Mozo> = new EventEmitter()

  constructor(){
    this.mozo = new Mozo()
  }

  enviarMozo(){
    this.mozoEnvia.emit(this.mozo)
    this.limpiarFormularioMozo()
  }

  limpiarFormularioMozo(){
    this.mozo = new Mozo()
  }
  

}
