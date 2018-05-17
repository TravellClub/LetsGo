import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Places } from '../places/places';
import { RouteFinder } from '../route-finder/route-finder';
import { VehiclePage } from '../vehicle/vehicle';
import { AccomodationPage } from '../accomodation/accomodation';
import { Guide } from '../guide/guide';
import { Equipment } from '../equipment/equipment';
import { Directions } from '../directions/directions';
import { Signup } from '../signup/signup';
import { Login } from '../login/login';
import { MyProfile } from '../my-profile/my-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    

  }

  openSignup(){
    this.navCtrl.push(Signup);
  }

  openLogin(){
    this.navCtrl.push(Login);
  }

  openPlaces(){
    this.navCtrl.push(Places);
  }
  openRouteFinder(){
    this.navCtrl.push(RouteFinder);
  }
  openDirections(){
    this.navCtrl.push(Directions);
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
  openmyProfile(){
    this.navCtrl.push(MyProfile);
  }


}
