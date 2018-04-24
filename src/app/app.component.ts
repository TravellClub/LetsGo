import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { VehiclePage } from '../pages/vehicle/vehicle';
import { AccomodationPage } from '../pages/accomodation/accomodation';
import { Guide } from '../pages/guide/guide';
import { RouteFinder } from '../pages/route-finder/route-finder';
import { Places } from '../pages/places/places';
import { Equipment } from '../pages/equipment/equipment';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      // { title: 'list', component: ListPage },
      { title: 'Places', component: Places },
      { title: 'Route Finder', component: RouteFinder },
      { title: 'Transport', component: VehiclePage },
      { title: 'Accommodation', component: AccomodationPage },
      { title: 'Guide', component: Guide },
      { title: 'Traveling Equipment', component: Equipment },

      // { title: 'Transport', component: VehiclePage },
      // { title: 'Accomodation', component: AccomodationPage },
      // { title: 'Guide', component: Guide },
      // { title: 'Route Finder', component: RouteFinder },
      // { title: 'Places', component: Places },
      // { title: 'Traveling Equipment', component: Equipment },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
