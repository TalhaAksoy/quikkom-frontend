import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor (private elementRef : ElementRef) {}

  input : boolean = false;
  categoriesArray : String[] = [
    'Teklonoji',
    'Erkek',
    'Bayan',
    'Oyun',
    'Bisey Bulamadim',
    'Deneme1'
  ]

  @HostListener('document:click', ['$event'])
  handleClickOutsideInput = (event : Event) => {
    if (!this.elementRef.nativeElement.contains(event.target))
      this.input = false;
  }

  handleInput = () => {
    this.input = !this.input;
  }

}
