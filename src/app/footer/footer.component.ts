import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  footerItems : string [] = [
    "Audio Description",
    "Help Centre", 
    "Gift Cards", 
    "Media Centre", 
    "Jobs", 
    "Netflix Shop",
    "Contact Us",
  ]
  
}
