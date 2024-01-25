import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  paginas = [
    {titulo: 'Crear', path: 'paginas/crear'},
    {titulo: 'Visualizar', path: 'paginas/visualizar'},
    {titulo: 'Clientes', path: 'paginas/clientes'},
    {titulo: 'Facturas', path: 'paginas/facturas'},
    {titulo: 'Productos', path: 'paginas/productos'},
    {titulo: 'Detalles', path: 'paginas/detalles'},
  ]
}
