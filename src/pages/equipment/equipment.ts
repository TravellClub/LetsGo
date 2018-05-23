import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EquipmentGallery} from '../equipmentgallery/equipmentgallery';
import {Login} from "../login/login";
import {MyProfile} from "../my-profile/my-profile";
import {GlobalProvider} from "../../providers/global-provider.service";
import {EquipmentCart} from "../equipment-cart/equipment-cart";
import {CartService} from "../../providers/cart-service";

@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html',
})
export class Equipment {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public globalProvider: GlobalProvider, public cartService: CartService) {
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

  openmyProfile() {
    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: MyProfile
      });
    } else
      this.navCtrl.push(MyProfile);
  }

  checkoutCart() {
    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: EquipmentCart
      });
    } else
      this.navCtrl.push(EquipmentCart);
  }

  checkCart() {
    return (this.cartService.getCartCount() > 0);
  }
}
