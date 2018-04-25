import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tools } from '../tools/tools';
import { Books } from '../books/books';
import { Statues } from '../statues/statues';
import { Accesories } from '../accesories/accesories';
import { Textiles } from '../textiles/textiles';


// $IMPORTSTATEMENT

/**
 * Generated class for the Equipment page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html',
})
export class Equipment {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Equipment');
  }
  tool() {
    this.navCtrl.push(Tools)
  }
  books() {
    this.navCtrl.push(Books)
  }
  statue() {
    this.navCtrl.push(Statues)
  }
  accesories()
  {
    this.navCtrl.push(Accesories)
  }
  textile()
  {
    this.navCtrl.push(Textiles)

  }
}
