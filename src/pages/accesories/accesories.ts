import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//$IMPORTSTATEMENT

/**
 * Generated class for the Accesories page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-accesories',
  templateUrl: 'accesories.html',
})
export class Accesories {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Accesories');
  }
  accesories()
  {
    this.navCtrl.push(Accesories)
  }
}
