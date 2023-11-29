import { Component } from '@angular/core';
import { Nota } from '../domain/nota';

import { NavigationExtras} from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { NotasFirebaseService } from '../services/notas-firebase.service';
import { NotasService } from '../services/notas.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  nota : Nota[] = []

  listaTareas: any
  tareaSeleccionada: Nota | null = null;

  constructor(private notaService : NotasService,
    private notasFirebaseService : NotasFirebaseService,
      private router: Router){
    this.nota = notaService.obtenerNotas()

    this.listaTareas = this.notasFirebaseService.getAll()
  }

  goEditar(nota: Nota){
    console.log("editando", nota)
    let params: NavigationExtras = {
      queryParams: {
        nota: nota
      }
    }
    this.router.navigate(['paginas/crear'], params)
  }

}
