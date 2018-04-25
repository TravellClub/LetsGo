import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Accesories } from './accesories';

@NgModule({
  declarations: [
    Accesories,
  ],
  imports: [
    IonicPageModule.forChild(Accesories),
  ],
})
export class AccesoriesModule {}
