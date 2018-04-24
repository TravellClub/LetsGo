import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Places } from '../places/places';
import { RouteFinder } from '../route-finder/route-finder';
import { VehiclePage } from '../vehicle/vehicle';
import { AccomodationPage } from '../accomodation/accomodation';
import { Guide } from '../guide/guide';
import { Equipment } from '../equipment/equipment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    

  }

  openPlaces(){
    this.navCtrl.push(Places);
  }
  openRouteFinder(){
    this.navCtrl.push(RouteFinder);
  }
  openTransport(){
    this.navCtrl.push(VehiclePage);
  }
  openAccommodation(){
    this.navCtrl.push(AccomodationPage);
  }
  openGuide(){
    this.navCtrl.push(Guide);
  }
  openEquipment(){
    this.navCtrl.push(Equipment);
  }
  

}
