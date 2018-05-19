import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Generated class for the StarRating directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Component({
  selector: 'star-rating', // Attribute selector
  templateUrl: 'star-rating.html'
})
export class StarRating {

  @Input('max') max = 5;

  @Output() whenClicked = new EventEmitter();

  constructor() {
    console.log('Hello StarRating Component');
    // this.text = "Hello World Star Rating"
  }

  ionViewWillEnter(){

  }

}
