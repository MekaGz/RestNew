import { Component } from '@angular/core';
import { PrincipalMozosComponent } from "./principal-mozos/principal-mozos.component";

@Component({
  selector: 'app-mozos',
  standalone: true,
  imports: [PrincipalMozosComponent],
  templateUrl: './mozos.component.html',
  styleUrl: './mozos.component.scss'
})
export class MozosComponent {

}
