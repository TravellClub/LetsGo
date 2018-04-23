import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { VehiclePage } from '../pages/vehicle/vehicle';
import { AccomodationPage } from '../pages/accomodation/accomodation';
import { Guide } from '../pages/guide/guide';
import { RouteFinder } from '../pages/route-finder/route-finder';
import { Places } from '../pages/places/places';
import { Equipment } from '../pages/equipment/equipment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Login } from '../pages/login/login';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { HttpModule } from '@angular/http';



  // Initialize Firebase
  export const firebaseConfig= {
    apiKey: "AIzaSyDRh5UlR5gh8hIIzPYcICv0o-29TAi19ZI",
    authDomain: "traveldb-43fbd.firebaseapp.com",
    databaseURL: "https://traveldb-43fbd.firebaseio.com",
    projectId: "traveldb-43fbd",
    storageBucket: "",
    messagingSenderId: "6054880400"
  };
  const myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  }


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // ListPage,
    VehiclePage,
    AccomodationPage,
    Guide,
    RouteFinder,
    Places,
    Equipment,
    Login
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig ),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // ListPage,
    VehiclePage,
    AccomodationPage,
    Guide,
    RouteFinder,
    Places,
    Equipment,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
