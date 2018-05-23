import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from "ionic-angular";
import {CartService} from "../../providers/cart-service";

@Component({
  selector: 'page-equipment-cart',
  templateUrl: 'equipment-cart.html'
})
export class EquipmentCart {

  itemList: Array<any>;
  totalCost = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, public cartService: CartService) {
    this.itemList = this.cartService.cartItems;
    console.log('CART ITEMS : ', this.itemList);
    this.calcTotal();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentCart');
  }

  calcTotal() {

    console.log('CART Total calc');
    this.itemList.forEach(item => {
      console.log('CART element item : ', item);
      let cost = item.buyingQty * item.price;
      this.totalCost += cost;
      console.log('CART Total calc : ' + this.totalCost);
    })
  }

  checkout() {
    let alert = this.alertCtrl.create({
      title: 'Order Successful',
      message: 'Your order has been placed successfully.\nThank You!!!',
      buttons: [{
        text: 'Ok',
        handler: () => {
          console.log('Ok clicked');
          this.navCtrl.pop();
        }
      }]
    });
    alert.present();
  }

  deleteItem(deleteItem) {
    this.itemList = this.cartService.removeItem(deleteItem);
    this.calcTotal();
  }

}
