import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../utils/products';
import * as productData from '../../../public/json/productData.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Blusas- camisas', description: 'Descripción de blusas', price: 100, image: 'imagenes/productoUno.png' },
    { id: 2, name: 'Pantalones', description: 'Descripción de pantalones', price: 150, image: 'imagenes/productoDos.jpg' },
    { id: 3, name: 'Vestidos', description: 'Descripción de vestidos', price: 200, image: 'imagenes/productoTres.png' }
  ];


  constructor() { }

  getProducts(): Observable<any>{
    return of(this.products);
  }

  
  getProductById(id: number):Observable<any>{
    const product=this.products.find(p => p.id == id);
    return of(product);
  }
}
