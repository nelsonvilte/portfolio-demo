import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Producto} from '../interfaces/producto.interface'
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando=true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];
  
  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
     this.http.get('https://template-hmtl-angular-default-rtdb.firebaseio.com/productos_idx.json')
     .subscribe((resp: any) => {
       this.productos=resp;
       this.cargando=false;
     })

  }

  getProducto(id:string){
    return this.http.get(`https://template-hmtl-angular-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  buscarProducto(termino:string){
    this.productosFiltrado = this.productos.filter(producto=>{
      return true;
    });
    console.log(this.productosFiltrado)
  }
}
