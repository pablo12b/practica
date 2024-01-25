import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './pages/crear/crear.component';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

const routes: Routes = [
  {path:"paginas/crear/:etiqueta", component: EditarComponent},
  {path:"paginas/crear", component: CrearComponent},
  {path:"paginas/visualizar", component: VisualizarComponent},
  {path:"paginas/clientes", component: ClientesComponent},
  {path:"paginas/facturas", component: FacturasComponent},
  {path:"paginas/productos", component: ProductosComponent},
  {path:"paginas/detalles", component: DetallesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
