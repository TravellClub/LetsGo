import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';


/**
 * Generated class for the Directions page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-directions',
  templateUrl: 'directions.html',
})
export class Directions {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Directions');
  }

  

}
