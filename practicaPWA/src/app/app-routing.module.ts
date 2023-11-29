import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';
import { CrearComponent } from './pages/crear/crear.component';

const routes: Routes = [
  {path:"pages/crear", component: CrearComponent},
  {path:"pages/visualizar", component: VisualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
