import { Component } from '@angular/core';
import { Nota } from '../domain/nota';
import { ActivatedRoute, Router } from '@angular/router';
import { NotasFirebaseService } from '../services/notas-firebase.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  nota: Nota = new Nota();

  
  constructor(private router: Router, 
      private route: ActivatedRoute,
      private notasFirebaseService: NotasFirebaseService){

        this.route.params.subscribe(params => {
          console.log(params)
          if(params['etiqueta']){
            this.loadPersona(params['etiqueta'])
          }
        })

  }

  loadPersona(uid: string) {
    this.notasFirebaseService.getNota(uid).subscribe(data => {
      console.log(data)
      this.nota = <any> data
    })
  }

}
