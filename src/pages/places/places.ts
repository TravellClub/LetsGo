import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// $IMPORTSTATEMENT

/**
 * Generated class for the Places page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class Places {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Places');
  }

}
