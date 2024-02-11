import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // name: string = 'Iphone 13';
  // price: number = 999;
  // color: string = 'Red';
  product = {
    name: 'Iphone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 5,
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
}
