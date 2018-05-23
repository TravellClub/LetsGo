import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GlobalProvider} from "../../providers/global-provider.service";
import {Login} from "../login/login";
import {Places} from "../places/places";


/**
 * Generated class for the MyProfile page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfile {

  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public globalProvider:GlobalProvider) {

    this.user = this.globalProvider.loggedInUser;
    console.log('constructor MyProfile');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfile');

  }


}
