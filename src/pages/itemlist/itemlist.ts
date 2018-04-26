import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//$IMPORTSTATEMENT

/**
 * Generated class for the Itemlist page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-itemlist',
  templateUrl: 'itemlist.html',
})
export class Itemlist {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Itemlist');
  }
  itemlist(){
    this.navCtrl.push( Itemlist);
  }

}
