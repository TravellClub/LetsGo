import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Itemlist } from './itemlist';

@NgModule({
  declarations: [
    Itemlist,
  ],
  imports: [
    IonicPageModule.forChild(Itemlist),
  ],
})
export class ItemlistModule {}
