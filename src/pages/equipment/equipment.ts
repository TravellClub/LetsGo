import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EquipmentGallery} from '../equipmentgallery/equipmentgallery';

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
    this.navCtrl.push(EquipmentGallery, {
      "category": "Tools"
    })
  }

  books() {
    this.navCtrl.push(EquipmentGallery, {
      "category": "Books"
    })
  }

  statue() {
    this.navCtrl.push(EquipmentGallery, {
      "category": "Statues"
    })
  }

  accessories() {
    this.navCtrl.push(EquipmentGallery, {
      "category": "Accessories"
    })
  }

  textile() {
    this.navCtrl.push(EquipmentGallery, {
      "category": "Textiles"
    })

  }
  
  }
