import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../pages/environments/environment';
import { Factura } from '../pages/domain/factura';
import { Detalle } from '../pages/domain/detalle';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }

  getFacturas(){
    let url = environment.WS_PATH + "/facturas/list/"
    return this.http.get<any>(url)
  }

  getAllDetalles() {
    let url = environment.WS_PATH + "/detalles/list/"
    return this.http.get<any>(url)
  }

  getDetalles(){
    let url = environment.WS_PATH + "/facturas/lista/detalle/";
    return this.http.get<any>(url)
  }

  saveFacturas(factura: Factura, detalles: Detalle[] = []){
    let url = environment.WS_PATH + "/facturas/detalles/";
    const facturaConDetalles = {
      cabecera: {
        id: factura.id,        // Asegúrate de que los nombres coincidan con lo que espera el servidor
        fecha: factura.fecha,
        cedula: factura.cedula
      },
      detalles: detalles      // Array de Detalles
    };
    // Realiza la solicitud POST con el objeto construido
    return this.http.post<any>(url, facturaConDetalles);
  }
}
