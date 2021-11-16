import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';
import { Product } from './product';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {
  getProducts(): Observable<Product[]> {
    return this._http.get(this._albumUrl).map(response => response.json())
  }
  private _albumUrl = "../assets/album.json"
  private _productsUrl = "../assets/products.json"  
  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album>{
    return this._http.get(this._albumUrl).map(response => <Album>response.json())
  }
  getProduct(id: number): Observable<Product[]>{
    return this._http.get(this._productsUrl).map(response => <Product[]>response.json())
  }


}
