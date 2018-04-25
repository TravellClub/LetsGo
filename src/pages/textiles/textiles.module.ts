import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Textiles } from './textiles';

@NgModule({
  declarations: [
    Textiles,
  ],
  imports: [
    IonicPageModule.forChild(Textiles),
  ],
})
export class TextilesModule {}
