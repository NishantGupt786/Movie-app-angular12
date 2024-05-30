import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MovieService } from './movie.service';
import { Movie, MovieResponse } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'movie-app';
  genre: any;
  language: any;
  year: any;
  movies: Movie[] | undefined = [];
  showDropdowns: boolean = true;

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getFamousMovies().subscribe(
      (data: MovieResponse) => {
        this.movies = data.results;
        console.log('Famous Movies:', data.results);
      },
      (error) => {
        console.log('Error:', error);
      }
    );

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showDropdowns = event.url === '/';
      }
    });
  }

  onGenreChange(genre: string): void {
    this.genre = genre;
    console.log('Genre Selected:', this.genre);
  }

  onLanguageChange(language: string): void {
    this.language = language;
    console.log('Language Selected:', this.language);
  }

  onYearChange(year: string): void {
    this.year = year;
    console.log('Year Selected:', this.year);
  }
}
