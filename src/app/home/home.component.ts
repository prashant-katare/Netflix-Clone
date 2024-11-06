import { Component } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieListComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
