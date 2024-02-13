import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
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
  // Optional 2nd argument of @ViewChild
  // 1. read: Use it to read the different token from the queried elements.
  // 2. static: Determines when the auery is resolved
  //          True is when the view is initialized ( beforethe first change detection) for the first time
  //          False if you want it to be resolved after every change detection
  @ViewChild('searchInput') searchInputEl: ElementRef;

  onSearchTextChanged() {}

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
