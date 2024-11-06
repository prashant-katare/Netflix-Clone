import { Component} from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { MovieModel } from '../../models/MovieModel'; 
import { NgIf } from '@angular/common';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  constructor(private movieService : MovieServiceService, private elementRef: ElementRef<HTMLElement>) { }

  movieList : MovieModel [] = [];
  tvShowList : MovieModel [] = [];
  topRatedMovies : MovieModel [] = [];
  upcomingMovies : MovieModel [] = [];
  trendingMovies : MovieModel [] = [];
  trendingTVShows : MovieModel [] = [];

  flag: boolean = false;

  selectedContent: string | null  = null;

  selectedMovie = [];

  l1 = false;
  l2 = false;
  l3 = false;
  l4 = false;
  l5 = false;
  l6 = false;

  r1 = false;
  r2 = false;
  r3 = false;
  r4 = false;
  r5 = false;
  r6 = false;


  ngOnInit(): void {

    this.movieService.getMovieData()
    .subscribe((data) =>{
      this.movieList = data.results;
      console.log(data.results);
    });

    this.movieService.getTVShowData()
    .subscribe((data) =>{
      this.tvShowList = data.results;
      console.log(data.results);
    });

    this.movieService.getTopRatedMovies()
    .subscribe((data) =>{
      this.topRatedMovies = data.results;
      console.log(data.results);
    });

    this.movieService.getTopUpcomingMovies()
    .subscribe((data) =>{
      this.upcomingMovies = data.results;
      console.log(data.results);
    });

    this.movieService.getTrendingMovies()
    .subscribe((data) =>{
      this.trendingMovies = data.results;
      console.log(data.results);
    });

    this.movieService.getTrendingTVSHows()
    .subscribe((data) =>{
      this.trendingTVShows = data.results;
      console.log(data.results);
    });
  }

  onHover(movie: MovieModel) {
    this.selectedContent = movie.title ?? movie.name;
    console.log(this.selectedContent)
  }

  offHover() {
    this.selectedContent = null;
  }

  toggleInfo() {
    this.flag = !this.flag;
  }

  buttonRight() {
    // document.getElementById('l1').scrollLeft += 20;
  };
  buttonLeft() {
    const elementId = this.elementRef.nativeElement.id;
    const element = document.getElementById("slider");
    // element?.scrollLeft -= 20;
    // document.getElementById('l1').scrollLeft -= 20;
  };


}
