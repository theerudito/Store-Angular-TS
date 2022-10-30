import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/interfaces/product.interface';

// un service no es mas que una capa para manejar los datos
// un service es un proveedor de datos que mantiene la logica de negocio
// un service sera consumido por un componente o los componentes que lo necesiten
// esto indica que esta en toda mi aplicacion
// usamos esto para traer datos de un servidor o de la localstorage

// un observable no es mas que un flujo de datos representa una coleccion de datos
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiURL = 'http://localhost:8000/products';

  constructor(private http: HttpClient) {}

  // operaciones CRUD
  // create
  // read
  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }
  // update
  // delete

  updateStock(productId: number, stock: number): Observable<any> {
    const body = { stock: stock };
    return this.http.patch<Product>(`${this.apiURL}/${productId}`, body);
  }
}
