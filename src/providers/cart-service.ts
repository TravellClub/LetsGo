import {Injectable} from '@angular/core';

/*
  Generated class for the CartService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartService {

  cartItems = [];

  constructor() {
    console.log('Hello CartService Provider');
  }

  addToCart(item) {
    console.log("CART Add : ", item);
    this.cartItems.push(item);
  }

  getCartCount() {
    if (this.cartItems == undefined) {
      return 0;
    }
    else {
      return this.cartItems.length;
    }
  }

  removeItem(item) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    return this.cartItems;
  }


}
