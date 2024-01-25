import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/factura.service';
import { Factura } from '../domain/factura';
import { Cliente } from '../domain/cliente';
import { DetalleService } from 'src/app/services/detalle.service';
import { Detalle } from '../domain/detalle';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit{
  facturas: any
  detalles: any
  facturaSeleccionada: Factura | null = null;
  mostrarDetalle:Boolean = false; // Variable de estado

  factura: Factura = new Factura()

  detallesSeleccionados: Detalle[] = [];

  constructor(private facturasServices: FacturaService, private detallesService: DetalleService){

  }

  ngOnInit(): void {
    this.facturas = this.facturasServices.getFacturas()
    this.cargarDetalles();
  }

  cargarDetalles() {
    this.facturasServices.getAllDetalles().subscribe(
      (data: Detalle[]) => {
        this.detalles = data;
      },
      (error) => {
        console.error('Error al obtener detalles', error);
      }
    );
  }

  toggleDetalle(detalle: Detalle) {
    const index = this.detallesSeleccionados.indexOf(detalle);
    if (index > -1) {
      this.detallesSeleccionados.splice(index, 1); // Quitar detalle
    } else {
      this.detallesSeleccionados.push(detalle); // Añadir detalle
    }
  }

  guardar(){
    this.facturasServices.saveFacturas(this.factura, this.detallesSeleccionados).subscribe(data => {
      console.log(data)
      if (data) {
        // Si data existe y es un objeto, ahora puedes comprobar si data.codigo es 1
        if(data.codigo == 1) {
          this.ngOnInit(); // Aunque llamar a ngOnInit() directamente no es una buena práctica
        } else {
          alert("Error al insertar " + data.mensaje);
        }
      } else {
        alert("Error al insertar: La respuesta es nula.");
      }
    })
  }

  mostrarDetalles(factura: Factura) {
    this.facturaSeleccionada = factura;
  }
}
