import { Component, OnInit } from '@angular/core';
import { Plato } from '../../../model/plato';
import { PlatosService } from '../../../services/platos.service';
import { TablaPlatosComponent } from "../tabla-platos/tabla-platos.component";
import { FormularioPlatosComponent } from "../formulario-platos/formulario-platos.component";

@Component({
  selector: 'app-principal-platos',
  standalone: true,
  imports: [TablaPlatosComponent, FormularioPlatosComponent],
  templateUrl: './principal-platos.component.html',
  styleUrl: './principal-platos.component.scss'
})
export class PrincipalPlatosComponent implements OnInit {
  listaPlatos:Plato[] = []
  platoSeleccionado:Plato

  constructor(private platoServicio:PlatosService){
    this.platoSeleccionado = new Plato()
  }
  
  ngOnInit(): void {
    this.platoServicio.cargarPlatos().subscribe(
      platos => this.listaPlatos = platos
    )
  }

  agregarPlato(plato:Plato){
    if(plato.id > 0){
      //modificar
      this.platoServicio.actualizarPlato(plato).subscribe(platoActualizado =>{
        this.listaPlatos = this.listaPlatos.map(
          item => (item.id == platoActualizado.id) ? {...platoActualizado} :item)
      })
    }else{
      //nuevo
      this.platoServicio.registrarPlatos(plato).subscribe(platoNuevo =>{
        this.listaPlatos = [...this.listaPlatos, {...platoNuevo}]
      })
    }
  }

  seleccionarPlato(plato:Plato){
    this.platoSeleccionado = {...plato}
  }

  eliminarPlato(id:number){
    this.platoServicio.eliminarPlato(id).subscribe(() => {
      this.listaPlatos = this.listaPlatos.filter(item => item.id != id)
    })
  }
}
