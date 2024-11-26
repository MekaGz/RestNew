import { Component } from '@angular/core';
import { PrincipalPlatosComponent } from "./principal-platos/principal-platos.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PrincipalPlatosComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
