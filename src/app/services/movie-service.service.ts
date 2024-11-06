import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }

  options = {
    params: {
      include_adult: "false",
      include_video: "true",
      languafe: "en-US",
      page: "1",
      sort_by: "popularity.desc"
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjEwOGZkNTFmMjU0Y2QyNDhkM2IzZjQ3Zjc1ZjhhOSIsIm5iZiI6MTczMDI4NTMyMC4zMjkxNDExLCJzdWIiOiI2NzFmOWNlNTM0YzBmYWJkNjgxZDI0MjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mhdgaaR9lTtVXOQBsutPApfFzkujvc9iysl_bBkxiuA'
    }
  };
  

  getMovieData(): Observable<any> {
    return this.http.get<any>("https://api.themoviedb.org/3/discover/movie", this.options);
  }

  getTVShowData(): Observable<any> {
    return this.http.get<any>("https://api.themoviedb.org/3/discover/tv", this.options);
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/top_rated", this.options);
  }

  getTopUpcomingMovies(): Observable<any> {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/upcoming", this.options);
  }

  getTrendingMovies(): Observable<any> {
    return this.http.get<any>("https://api.themoviedb.org/3/trending/movie/day", this.options);
  }

  getTrendingTVSHows(): Observable<any> {
    return this.http.get<any>("https://api.themoviedb.org/3/trending/tv/day", this.options);
  }


}
