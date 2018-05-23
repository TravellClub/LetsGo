import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { MyProfile } from '../my-profile/my-profile';
import { Login } from '../login/login';





declare var google;

@Component({
  selector: 'page-route-finder',
  templateUrl: 'route-finder.html',
})
export class RouteFinder {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any;
  currentPosition: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log("Google maps loading")
    this.loadMap();
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      // let latLng = new google.maps.LatLng(-34.9290, 138.6010);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.currentPosition = latLng;

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      console.log("Map load latlng : " + latLng);


    }, (err) => {
      console.log(err);
    });

  }

  showCurrentLocation() {
    this.geolocation.getCurrentPosition().then((position) => {
      this.addMarker(this.currentPosition,"Current Position");


    }, (err) => {
      console.log(err);
    });

  }

  public addMarker(latLng,content) {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  // ionViewEnter(){
  //   this.map = new google.maps(document.getElementById('map'), {
  //     center:{lat:-34.9011, lng: -56.1645},
  //     zoom: 15
  //   })
  // }

  searchPlaces(placetype) {
    var service = new google.maps.places.PlacesService(this.map);
    let request = {
      location: this.currentPosition,
      radius: 8047,
      types: [placetype]
    };
    return new Promise((resolve, reject) => {
      service.nearbySearch(request, function (results, status) {
        console.log("status : ",status);
        console.log("places service status : ",google.maps.places.PlacesServiceStatus.OK);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log("Places : ", results);
          resolve(results);
        } else {
          console.log("Places : Error");
        }
      });
    });
  }

  addMarkersOfPlaces(placetype){
    console.log("resolve call");
    this.searchPlaces(placetype).then((results: Array<any>)=>{
      for(var i = 0; i< results.length; i++){
        this.addMarker(results[i].geometry.location,results[i].name);
      }
    },(status)=>console.log("serach places addMarkers status ",status));
    
  }
  // openmyProfile() {
  //   if (this.globalProvider.loggedInUser == null) {
  //     this.navCtrl.push(Login, {
  //       nextAction: MyProfile
  //     });
  //   } else
  //     this.navCtrl.push(MyProfile);
  // }



}






