import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../pages/environments/environment';
import { Detalle } from '../pages/domain/detalle';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  constructor(private http: HttpClient) { }

  getDetalles(){
    let url = environment.WS_PATH + "/detalles/list/"
    return this.http.get<any>(url)
  }

  saveDetalles(detalle: Detalle){
    let url = environment.WS_PATH + "/detalles/"
    return this.http.post<any>(url, detalle)
  }
}
