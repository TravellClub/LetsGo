import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import {Weather} from '../../providers/weather';
//$IMPORTSTATEMENT

/**
 * Generated class for the Weather page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class Weather {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Weather');
  }

}
