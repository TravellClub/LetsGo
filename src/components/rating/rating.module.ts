import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Rating } from './rating';

@NgModule({
  declarations: [
    Rating,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Rating
  ]
})
export class RatingModule {}
