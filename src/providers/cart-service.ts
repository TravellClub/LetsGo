import { Injectable } from '@angular/core';

/*
  Generated class for the CartService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartService {

  cartItems : any[];

  constructor() {
    console.log('Hello CartService Provider');
  }

  addToCart(item){
    this.cartItems.push(item);
  }



}
