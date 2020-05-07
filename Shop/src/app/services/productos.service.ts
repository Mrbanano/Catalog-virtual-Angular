import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfases/products.interfases';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loadingProducts = true;
  products: Product[] = [];

  constructor( private http: HttpClient) {
    this.loadProducts();

   }

   private loadProducts(){
      this.http
        .get(
          'https://catalog-virtual-angular.firebaseio.com/productos_idx.json'
        )
        .subscribe((res: Product[]) => {
          console.log(res);
          this.loadingProducts = false;
          this.products = res;
        });
   }
}
