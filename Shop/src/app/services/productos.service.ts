import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfases/products.interfases';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loadingProducts = true;
  products: Product[] = [];
  productsFilter: Product[] = [];
  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise((resolve, rejects) => {
      this.http
        .get(
          'https://catalog-virtual-angular.firebaseio.com/productos_idx.json'
        )
        .subscribe((res: Product[]) => {
          this.products = res;
          resolve();
          this.quickLoading();
        });
    });
  }

  getProduct(id: string) {
    return this.http.get(
      `https://catalog-virtual-angular.firebaseio.com/productos/${id}.json`);
  }
  searchProduct(txt: string) {
    if (this.products.length === 0) {
      this.loadProducts().then(() => {
        this.filterProducts(txt);
        this.quickLoading();
      })
    } else {
      this.filterProducts(txt);
    }
  }
  quickLoading() {
    setTimeout(() => {
      this.loadingProducts = false;
    }, 2000);
  }
  private filterProducts(txt: string) {
    this.productsFilter = [];
    txt = txt.toLowerCase();
    this.products.forEach(prod => {
      const titlelower = prod.titulo.toLowerCase();
      if (prod.categoria.indexOf(txt) >= 0 || titlelower.indexOf(txt) >= 0) {
        this.productsFilter.push(prod);
      }
    });
  }
}
