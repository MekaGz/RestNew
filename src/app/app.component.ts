import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "./components/menu/menu.component";
import { MozosComponent } from "./components/mozos/mozos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,MenuComponent, MozosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    // Recuperar el estado del almacenamiento local al cargar la aplicación
    const storedState = localStorage.getItem('mostrarMenu');
    if (storedState !== null) {
      this.mostrarMenu = JSON.parse(storedState); // Convertir el string a boolean
      this.mensaje_enlace = this.mostrarMenu ? 'Mozos' : 'Menú';
    }
  }
  title = 'RestNew';
  mostrarMenu: Boolean = true;  // Para controlar la visibilidad del menú
  mensaje_enlace: String = 'Mozos';

  mostrarOcultar() {
    this.mostrarMenu = !this.mostrarMenu;  // Alterna la visibilidad entre menú y mozos
    this.mensaje_enlace = this.mostrarMenu ? 'Mozos' : 'Menú';  // Cambia el texto del enlace
    localStorage.setItem('mostrarMenu', JSON.stringify(this.mostrarMenu)); // Guardar el estado actualizado
  }
  
}
