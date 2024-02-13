import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Steave', 'Merry', 'John', 'Sarah'];

  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
}
