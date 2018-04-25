import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Books } from './books';

@NgModule({
  declarations: [
    Books,
  ],
  imports: [
    IonicPageModule.forChild(Books),
  ],
})
export class BooksModule {}
