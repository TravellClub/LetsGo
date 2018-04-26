import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Directions } from '../directions/directions';
//$IMPORTSTATEMENT

/**
 * Generated class for the Statues page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-statues',
  templateUrl: 'statues.html',
})
export class Statues {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Statues');
  }
  statue() {
    this.navCtrl.push(Statues)
  }


  openDirections() {

    this.navCtrl.push(Directions,
      {
        destination: { lat: 6.879127, lng: 79.859740 }

      });
  }

}