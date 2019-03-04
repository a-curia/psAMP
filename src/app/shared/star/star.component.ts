import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number;
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // Onchanges only watches for changes on input property, so this  on changes don't fire
  ngOnChanges(): void {
    console.log('In Onchanges');
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    console.log(`The rating ${this.rating} was clicked!`);
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`); // raise the event to the container
  }

}
