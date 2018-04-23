import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RouteFinder } from '../route-finder/route-finder';
// $IMPORTSTATEMENT

/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAG
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onLoginClicked(){
    this.navCtrl.push(RouteFinder);
  }

}
