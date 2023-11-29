import { Injectable } from '@angular/core';
import { Nota } from '../domain/nota';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private notas: Nota[] = [];

  agregarReceta(nota: Nota) {
    const notas = this.obtenerNotas();
      // Agregar una verificación para asegurarse de que event y event.target no sean nulos
          notas.push(nota);
          localStorage.setItem('notas', JSON.stringify(notas));
  }

  obtenerNotas() {
    const notas = localStorage.getItem('notas');
    return notas ? JSON.parse(notas) : [];
  }

  borrarNotas() {
    localStorage.removeItem('notas');
  }
}
