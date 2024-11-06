import { Component, Input } from '@angular/core';
import { MovieListComponent } from "../movie-list/movie-list.component";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  // @Input({required: true}) title = "";
  // @Input({required: true}) overview = ""; 

}
