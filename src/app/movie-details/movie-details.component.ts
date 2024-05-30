import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { MovieDetail } from '../app.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieDetail | undefined;
  errorMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      this.fetchMovieDetails(movieId);
    });
  }

  fetchMovieDetails(id: string): void {
    this.movieService.getMovieDetails(id).subscribe(
      (data: MovieDetail) => {
        this.movie = data;
        this.errorMessage = undefined; // Clear error message if data is found
      },
      (error) => {
        console.log('Error:', error);
        this.errorMessage = 'Movie not found';
        this.movie = undefined; // Clear the movie data if there's an error
      }
    );
  }
}
