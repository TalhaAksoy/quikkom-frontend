import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {
	constructor (private elementRef : ElementRef) {}

	autoComplateState : boolean = false;

	@HostListener('document:click' , ['$event'])
	handleAutoComplateStateListener =(event : Event) => {
		if (!this.elementRef.nativeElement.contains(event.target))
		this.autoComplateState = false;
	}

	handleAutoComplateState =() => {
		this.autoComplateState = !this.autoComplateState;
	}
}
