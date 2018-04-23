import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RouteFinder page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-route-finder',
  templateUrl: 'route-finder.html',
})
export class RouteFinder {
  rootPage = TabIconContentPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RouteFinder');
  }
  // TabsTextContentPage {
  //   constructor() {}
  // }
  
  // export class TabsTextPage {
  //   constructor() {
  //     this.tab1 = TabsTextContentPage;
  //     this.tab2 = TabsTextContentPage;
  //     ...
  //   }
  // }

}
@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'danger' : 'primary'">
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
    </ion-content>
`})
export class TabIconContentPage {
  isAndroid: boolean = false;

  constructor() {
  }

  // export class BasicPage {
  //   constructor(public toastCtrl: ToastController) { }
  
  //   showToast(position: string) {
  //     let toast = this.toastCtrl.create({
  //       message: 'Successfully added to favarites',
  //       duration: 1000,
  //       position: position
  //     });
  
  //     toast.present(toast);
  //   }
  // loadMap() {

  //   this.geolocation.getCurrentPosition().then((position) => {

  //     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //     console.log("loc " + latLng);

  //     let mapOptions = {
  //       center: latLng,
  //       zoom: 15,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     }

  //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  //     let marker = new google.maps.Marker({
  //       map: this.map,
  //       animation: google.maps.Animation.DROP,
  //       position: latLng
  //     });
  //     let content = "<h4>My Location</h4>";

  //     this.addInfoWindow(marker, content);

  //   }, (err) => {
  //     console.log("load map :" + err);
  //   });


  // }


}



@Component({
  templateUrl: 'RouteFinder.html'
})
export class ListPage { }
