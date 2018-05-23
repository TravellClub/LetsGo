import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-equipment-cart',
  templateUrl: 'equipment-cart.html',
})
export class EquipmentCart {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentCart');
  }

}
