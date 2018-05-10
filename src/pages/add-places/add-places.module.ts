import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlaces } from './add-places';

@NgModule({
  declarations: [
    AddPlaces,
  ],
  imports: [
    IonicPageModule.forChild(AddPlaces),
  ],
})
export class AddPlacesModule {}
