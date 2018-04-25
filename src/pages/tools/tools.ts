import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//$IMPORTSTATEMENT

/**
 * Generated class for the Tools page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html',
})
export class Tools {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tools');
  }

  tool()
  {
    this.navCtrl.push(Tools)
  }
    

}
