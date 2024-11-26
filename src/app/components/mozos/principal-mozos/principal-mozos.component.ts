import { Component, OnInit } from '@angular/core';
import { Mozo } from '../../../model/mozo';
import { MozosService } from '../../../services/mozos.service';
import { TablaMozosComponent } from "../tabla-mozos/tabla-mozos.component";
import { FormularioMozosComponent } from '../formulario-mozos/formulario-mozos.component';

@Component({
  selector: 'app-principal-mozos',
  standalone: true,
  imports: [TablaMozosComponent,FormularioMozosComponent],
  templateUrl: './principal-mozos.component.html',
  styleUrl: './principal-mozos.component.scss'
})
export class PrincipalMozosComponent implements OnInit{
  listaMozo:Mozo[] = []
  mozoSeleccionado:Mozo

  constructor(private mozoServicio:MozosService){
    this.mozoSeleccionado = new Mozo()
  }

  ngOnInit(): void {
    this.mozoServicio.cargarMozos().subscribe(
      mozos => this.listaMozo = mozos
    )
  }

  agregarMozo(mozo:Mozo){
    if(mozo.id > 0){
      //modificar
      this.mozoServicio.actualizarMozo(mozo).subscribe(mozoActualizado =>{
        this.listaMozo = this.listaMozo.map(
          item => (item.id == mozoActualizado.id) ? {...mozoActualizado} :item)
      })
    }else{
      //nuevo
      this.mozoServicio.registrarMozos(mozo).subscribe(mozoNuevo =>{
        this.listaMozo = [...this.listaMozo, {...mozoNuevo}]
      })
    }
  }

  seleccionarMozo(mozo:Mozo){
    this.mozoSeleccionado = {...mozo}
  }

  eliminarMozo(id:number){
    this.mozoServicio.eliminarMozo(id).subscribe(() => {
      this.listaMozo = this.listaMozo.filter(item => item.id != id)
    })
  }
  
}
