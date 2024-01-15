import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../pages/environments/environment';
import { Cliente } from '../pages/domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes(){
    let url = environment.WS_PATH + "/clientes/list/"
    return this.http.get<any>(url)
  }

  saveClientes(cliente: Cliente){
    let url = environment.WS_PATH + "/clientes/"
    return this.http.post<any>(url, cliente)
  }
}
