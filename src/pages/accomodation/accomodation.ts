import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ Hotels } from'../hotels/hotels';
import { CallNumber } from '@ionic-native/call-number';


@Component({
  selector: 'page-accomodation',
  templateUrl: 'accomodation.html'
})
export class AccomodationPage {

  constructor(public navCtrl: NavController, public callNumber: CallNumber) {

  }
  openhotel(){
    this.navCtrl.push(Hotels);
  } 
  opencall(){
    console.log("calling number");
    this.callNumber.callNumber("0775817987", true)
    .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
}
