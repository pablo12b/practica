import { Component, OnInit } from '@angular/core';
import { DetalleService } from 'src/app/services/detalle.service';
import { Detalle } from '../domain/detalle';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{
  detalles: any

  detalle: Detalle = new Detalle()

  constructor(private detallesServices: DetalleService){

  }

  ngOnInit(): void {
    this.detalles = this.detallesServices.getDetalles()
  }

  guardar(){
    this.detallesServices.saveDetalles(this.detalle).subscribe(data => {
      console.log(data)
      if(data.codigo ==1)
        this.ngOnInit()
      else
        alert("Error al insertar "+ data.mensaje)
      this.ngOnInit()
    })
  }
}
