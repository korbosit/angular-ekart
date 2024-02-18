import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../Models/Product';
import { HighlightDirective } from '../../../CustomDirectives/highlight.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product: Product;
}
