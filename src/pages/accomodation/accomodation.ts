import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ Hotels } from'../hotels/hotels';


@Component({
  selector: 'page-accomodation',
  templateUrl: 'accomodation.html'
})
export class AccomodationPage {

  items = [];

  constructor(public navCtrl: NavController) {
  }
  openhotel(){
    this.navCtrl.push(Hotels);
  }
  opencall(){
    console.log("calling number");
  //   this.callNumber.callNumber("0775817987", true)
  //   .then(res => console.log('Launched dialer!', res))
  // .catch(err => console.log('Error launching dialer', err));
  }

  loadData(){
    console.log("Loading accommodation data");
      this.items = [{
        name : "Hotel Name",
        address : "Address of the hotel",
        contact : "0711225544",
        rating : 5.0,
        image : "\\assets\\img\\1446529061Buffet_Restaurant.jpg"
      },{
        name : "Hotel 2",
        address : "Address of the hotel 2",
        contact : "0777445555",
        rating : 4.0,
        image : "\\assets\\img\\home1.jpg"
      }
      ];
      console.log("items : " + this.items);
  }

  ionViewDidLoad(){
    this.loadData();
  }

}
