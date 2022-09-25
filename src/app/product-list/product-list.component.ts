import { Component } from '@angular/core';
import { Product } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    constructor(
    private productService: ProductService
    ) { }

    products: Product[] = [];

    ngOnInit(): void {
        this.productService.getProducts().subscribe((products: Product[]) =>
        {
            this.products = products;
        });
    }

    share() {
      window.alert('The product has been shared!');
    }

    onNotify() {
      window.alert('You will be notified when the product goes on sale');
    }
}