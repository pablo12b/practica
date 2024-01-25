import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../pages/environments/environment';
import { Producto } from '../pages/domain/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos(){
    let url = environment.WS_PATH + "/productos/list/"
    return this.http.get<any>(url)
  }

  saveProductos(producto: Producto){
    let url = environment.WS_PATH + "/productos/"
    return this.http.post<any>(url, producto)
  }
}
