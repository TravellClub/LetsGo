import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// $IMPORTSTATEMENT

/**
 * Generated class for the Equipment page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html',
})
export class Equipment {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Equipment');
  }

}
