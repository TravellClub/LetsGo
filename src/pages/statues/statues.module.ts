import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Statues } from './statues';

@NgModule({
  declarations: [
    Statues,
  ],
  imports: [
    IonicPageModule.forChild(Statues),
  ],
})
export class StatuesModule {}
