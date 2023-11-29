import { Injectable } from '@angular/core';
import { Nota } from '../domain/nota';

@Injectable({
  providedIn: 'root'
})
export class  NotasService {
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

  borrarNota(nombreNota: string) {
    // Obtener las notas actuales desde localStorage
    const notasString = localStorage.getItem('notas');
  
    // Verificar si hay notas en localStorage
    if (notasString) {
      // Parsear las notas a un objeto
      const notas: { [key: string]: string } = JSON.parse(notasString);
  
      // Verificar si la nota que deseas borrar existe
      if (notas.hasOwnProperty(nombreNota)) {
        // Borrar la nota específica
        delete notas[nombreNota];
  
        // Convertir el objeto de notas a una cadena y almacenarlo nuevamente
        localStorage.setItem('notas', JSON.stringify(notas));
  
        console.log(`La nota '${nombreNota}' ha sido borrada correctamente.`);
      } else {
        console.log(`No se encontró la nota '${nombreNota}'.`);
      }
    } else {
      console.log('No hay notas almacenadas en localStorage.');
    }
  }
  
}
