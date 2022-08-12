import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit {
  @Output() textSearch = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  emitSearch(text: string) {
    this.textSearch.emit(text);
  }
}
