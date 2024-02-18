import { Component, Input } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { SetBackground } from '../../CustomDirectives/SetBackground.directive';
import { AppHoverDirective } from '../../CustomDirectives/app-hover.directive';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, SetBackground, AppHoverDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() productListComp: ProductListComponent = undefined;

  product: Product;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
