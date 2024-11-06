import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navItems : string [] = [
    "Home",
    "TV Shows", 
    "Movies", 
    "New & Popular", 
    "My List", 
    "Browse by Language"
  ]

}
