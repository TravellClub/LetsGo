import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GlobalProvider} from "../../providers/global-provider.service";
import {Login} from "../login/login";
import {Places} from "../places/places";
import {AccomodationPage} from "../accomodation/accomodation";
import {EquipmentGallery} from "../equipmentgallery/equipmentgallery";
import {Equipment} from "../equipment/equipment";


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
  favClicked = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public globalProvider:GlobalProvider) {

    this.user = this.globalProvider.loggedInUser;
    console.log('constructor MyProfile');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfile');

  }

  favClick(){
    this.favClicked= !this.favClicked;
  }

  placeClick(){
    this.navCtrl.push(Places,{
      mode:'fav'
    })
  }

  hotelClick(){
    this.navCtrl.push(AccomodationPage,{
      mode:'fav'
    })
  }

  itemClick(){
    this.navCtrl.push(Equipment,{
      mode:'fav'
    })
  }


}
