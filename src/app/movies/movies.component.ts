import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../app.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() movie?: Movie;
  constructor() { }

  ngOnInit(): void {

  }

}
