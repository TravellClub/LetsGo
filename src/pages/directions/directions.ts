import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavParams, NavController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';

/**
 * Generated class for the Directions page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@Component({
  selector: 'page-directions',
  templateUrl: 'directions.html',
})
export class Directions {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log("Google maps loading")
    this.loadMap();
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
    }, (err) => {
      console.log(err);
    });


  }


}
