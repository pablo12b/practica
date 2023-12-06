import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Nota } from '../domain/nota';
import { NotasFirebaseService } from '../services/notas-firebase.service';
import { NotasService } from '../services/notas.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent {
  notas: Nota[] = [];
  terminoBusqueda: string = '';
  etiquetaBorrar: string = '';

  listaNotas: any

  constructor(private router: Router, private notasService: NotasService, private notasFirebaseService: NotasFirebaseService) {
    
    this.notas = notasService.obtenerNotas()

    this.listaNotas = this.notasFirebaseService.getAll()
  }

  borrarTodasLasNotas() {
    this.notasFirebaseService.eliminarCampo(this.etiquetaBorrar);
  }

  goEditar(nota: any){
    console.log("editando", nota)

    let params: NavigationExtras = {
      queryParams: {
        nota: nota
      }
    }
    this.router.navigate(['paginas/crear'], params)
  }
}
