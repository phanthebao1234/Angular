import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
// import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAllProduct() {
    return this.get("/products")
  }

  getAllProductDetail(id: any) {
    return this.get("/products/" + id)
  }

  deleteProduct(id: any) {
    return this.delete("/products/" + id)
  }

  addProduct(products: Product) {
    return this.post("/products/", products)
  }

  editProduct(products: Product, id: any) {
    return this.put("/products/" + id, products)
  }
}
