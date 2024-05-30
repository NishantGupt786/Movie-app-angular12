export interface Movie {
    adult: boolean;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export interface MovieResponse {
    results?: Movie[];
}

export interface Genre {
    id: number;
    name: string;
}

export interface MovieDetail{
    adult: boolean;
    genre_ids: Genre[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    backdrop_path: string;
    budget: number;
    homepage?: string;
    imdb_id: string;
    release_date: string;
    tagline: string;
}