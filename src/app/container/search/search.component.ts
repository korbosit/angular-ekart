import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';

  // 1.Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {}

  updateSearchText(inputEl: HTMLInputElement) {
    // this.searchText = event.target.value;
    // console.log(inputEl.value);
    this.searchText = inputEl.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
