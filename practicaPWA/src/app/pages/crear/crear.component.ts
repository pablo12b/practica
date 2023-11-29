import { Component } from '@angular/core';
import { Nota } from '../domain/nota';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotasService } from '../services/notas.service';
import { NotasFirebaseService } from '../services/notas-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  formulario: FormGroup;

  constructor(private router: Router ,private fb: FormBuilder, private notasService: NotasService, private notasFirebaseService: NotasFirebaseService) {
    this.formulario = this.fb.group({
      nota: ['', Validators.required],
      fecha: [null, Validators.required],
      etiqueta: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const nota = this.formulario.value as Nota;
      this.notasService.agregarReceta(nota);
      this.notasFirebaseService.save(nota);
      this.formulario.reset();
      }
    }
}
