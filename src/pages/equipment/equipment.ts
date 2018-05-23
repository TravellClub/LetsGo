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

  mode: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public globalProvider: GlobalProvider, public cartService: CartService) {
    this.mode = this.navParams.get('mode');
    console.log("MODE : ", this.mode);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Equipment');
  }

  tool() {
    if (this.mode == 'fav') {
      this.navCtrl.push(EquipmentGallery, {
        category: "Tools",
        mode: 'fav'
      })
    } else {
      this.navCtrl.push(EquipmentGallery, {
        category: "Tools"
      })
    }

  }

  books() {
    if (this.mode == 'fav') {
      this.navCtrl.push(EquipmentGallery, {
        category: "Books",
        mode: 'fav'
      })
    } else {
      this.navCtrl.push(EquipmentGallery, {
        category: "Books"
      })
    }
  }

  statue() {
    if (this.mode == 'fav') {
      this.navCtrl.push(EquipmentGallery, {
        category: "Statues",
        mode: 'fav'
      })
    } else {
      this.navCtrl.push(EquipmentGallery, {
        category: "Statues"
      })
    }
  }

  accessories() {
    if (this.mode == 'fav') {
      this.navCtrl.push(EquipmentGallery, {
        category: "Accessories",
        mode: 'fav'
      })
    } else {
      this.navCtrl.push(EquipmentGallery, {
        category: "Accessories"
      })
    }
  }

  textile() {
    if (this.mode == 'fav') {
      this.navCtrl.push(EquipmentGallery, {
        category: "Textiles",
        mode: 'fav'
      })
    } else {
      this.navCtrl.push(EquipmentGallery, {
        category: "Textiles"
      })
    }

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
