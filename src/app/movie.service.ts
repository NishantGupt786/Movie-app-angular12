import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Movie, MovieResponse, MovieDetail } from './app.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '9e1a4a0f233c31a65d83432371719990';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getFamousMovies(): Observable<MovieResponse> {
    return this.http
      .get<MovieResponse>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  discoverMovies(
    with_original_language?: string,
    primary_release_year?: number,
    with_genres?: string
  ): Observable<MovieResponse> {
    let params = new HttpParams().set('api_key', this.apiKey);

    if (with_original_language) {
      params = params.set('with_original_language', with_original_language);
    }
    if (primary_release_year) {
      params = params.set('primary_release_year', primary_release_year.toString());
    }
    if (with_genres) {
      params = params.set('with_genres', with_genres);
    }

    return this.http
      .get<MovieResponse>(`${this.baseUrl}/discover/movie`, { params })
      .pipe(catchError(this.handleError));
  }

  getMovieDetails(id: string): Observable<MovieDetail> {
    return this.http
      .get<MovieDetail>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or network:', error.error);
    } else {
      console.error('Server-side error:', error.error);
    }

    return throwError(() => new Error('Cannot retrieve data from the server. Please try again.'));
  }
}
