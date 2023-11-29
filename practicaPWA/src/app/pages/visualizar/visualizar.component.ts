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
export class VisualizarComponent implements OnInit {
  notas: Nota[] = [];
  terminoBusqueda: string = '';

  listaNotas: any

  constructor(private router: Router, private notasService: NotasService, private notasFirebaseService: NotasFirebaseService) {
    this.notas = notasService.obtenerNotas()

    this.listaNotas = this.notasFirebaseService.getAll()
  }

  ngOnInit() {
    this.notas = this.notasService.obtenerNotas();
  }

  borrarTodasLasNotas() {
    this.notasService.borrarNotas();
  }

  goEditar(receta: any){
    console.log("editando", receta)

    let params: NavigationExtras = {
      queryParams: {
        receta: receta
      }
    }
    this.router.navigate(['paginas/formulario'], params)
  }
}
