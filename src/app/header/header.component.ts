import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() showDropdowns: boolean = true;
  @Output() genreChange = new EventEmitter<any>();
  @Output() languageChange = new EventEmitter<any>();
  @Output() yearChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  listGenre: string = '';
  listLanguage: string = '';
  listYear: string = '';

  updateGenre(genre: string) {
    this.genreChange.emit(genre);
  }

  updateLanguage(language: string) {
    this.languageChange.emit(language);
  }

  updateYear(year: string) {
    this.yearChange.emit(year);
  }
  resetFilters() {
    this.listGenre = '';
    this.listLanguage = '';
    this.listYear = '';
    this.genreChange.emit(this.listGenre);
    this.languageChange.emit(this.listLanguage);
    this.yearChange.emit(this.listYear);
  }
}
