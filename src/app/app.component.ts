import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import {AccomodationPage} from '../pages/accomodation/accomodation';
import {RouteFinder} from '../pages/route-finder/route-finder';
import {Places} from '../pages/places/places';
import {Equipment} from '../pages/equipment/equipment';
import {Login} from '../pages/login/login';
import {GlobalProvider} from "../providers/global-provider.service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public globalProvider:GlobalProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Places', component: Places },
      { title: 'Route Finder', component: RouteFinder },
      { title: 'Accommodation', component: AccomodationPage },
      { title: 'Traveling Equipment', component: Equipment }
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

  logout(){
    this.globalProvider.setLoggedInUser(null);
    this.nav.setRoot(HomePage);
  }

  login(){
    this.nav.push(Login,{
      nextAction:HomePage
    })
  }
}
