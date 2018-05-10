import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the Booking page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class Booking {

  itemList: any;
  alertCtrl: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Booking');
  }
 booking()
 {
 }

}