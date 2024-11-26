import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mozo } from '../../../model/mozo';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-formulario-mozos',
  standalone: true,
  imports: [FormsModule,MatDatepickerModule,MatInputModule,MatNativeDateModule],
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
