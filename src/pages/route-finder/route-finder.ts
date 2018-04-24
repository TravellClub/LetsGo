import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';


// $IMPORTSTATEMENT

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
  }
  // export class segment{
  //   routFinder: string = "near by";
  //   isAndroid = platform.is('android');
  // }



  



