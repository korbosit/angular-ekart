import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  // searchText: string = 'Mens wear';

  // updateSearchText(event: any) {
  //   this.searchText = event.target.value;
  // }
  searchText = new FormControl('');

  constructor() {
    this.searchText.valueChanges.subscribe((value) => {
      console.log(this.searchText);
      console.log(value); // Выводим значение в консоль
    });
  }
}
