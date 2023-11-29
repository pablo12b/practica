import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';
import { CrearComponent } from './pages/crear/crear.component';

const routes: Routes = [
  {path:"paginas/crear", component: CrearComponent},
  {path:"paginas/visualizar", component: VisualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
