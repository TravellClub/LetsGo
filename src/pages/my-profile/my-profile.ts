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
  addClicked = false;

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

  addingClick(){
    this.addClicked= !this.addClicked;
  }

  placeClick(mode){
    this.navCtrl.push(Places,{
      mode:mode
    })
  }

  hotelClick(mode){
    this.navCtrl.push(AccomodationPage,{
      mode:mode
    })
  }

  itemClick(mode){
    this.navCtrl.push(Equipment,{
      mode:mode
    })
  }


}
