import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './pages/crear/crear.component';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  {path:"paginas/crear/:etiqueta", component: EditarComponent},
  {path:"paginas/crear", component: CrearComponent},
  {path:"paginas/visualizar", component: VisualizarComponent},
  {path:"paginas/clientes", component: ClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
