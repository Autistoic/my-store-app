import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private apiURL = "https://localhost:44350/api/";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    items: Product[] = [];

    constructor(
        private httpClient: HttpClient
    ) { }


    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.apiURL + 'Product/').pipe();
    }
}
