import { Component, OnInit } from '@angular/core';
import { Producto } from '../domain/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  productos: any

  producto: Producto = new Producto()

  constructor(private productossServices: ProductosService){

  }

  ngOnInit(): void {
    this.productos = this.productossServices.getProductos()
  }

  guardar(){
    this.productossServices.saveProductos(this.producto).subscribe(data => {
      console.log(data)
      if(data.codigo ==1)
        this.ngOnInit()
      else
        alert("Error al insertar "+ data.mensaje)
      this.ngOnInit()
    })
  }
}
