import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Direction } from '../direction/direction';
//$IMPORTSTATEMENT

/**
 * Generated class for the More page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})

export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad More');
  }

 /* opendirection(){
    this.navCtrl.push(Direction);
   }*/

}
