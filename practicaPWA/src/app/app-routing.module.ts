import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './pages/crear/crear.component';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';

const routes: Routes = [
  {path:"paginas/crear", component: CrearComponent},
  {path:"paginas/visualizar", component: VisualizarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
