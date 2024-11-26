import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'RestNew';
  mostrarMenu: Boolean = true;  // Para controlar la visibilidad del menú
  mensaje_enlace: String = 'Mozos';

  mostrarOcultar() {
    this.mostrarMenu = !this.mostrarMenu;  // Alterna la visibilidad entre menú y mozos
    this.mensaje_enlace = this.mostrarMenu ? 'Mozos' : 'Menú';  // Cambia el texto del enlace
  }
}
