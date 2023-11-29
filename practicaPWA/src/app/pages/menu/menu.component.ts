import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  paginas = [
    {titulo: 'Crear', path: 'pages/crear'},
    {titulo: 'Visualizar', path: 'pages/visualizar'}
  ]
}
