import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import {VehiclePage} from '../pages/vehicle/vehicle';
import {AccomodationPage} from '../pages/accomodation/accomodation';
import {Guide} from '../pages/guide/guide';
import {RouteFinder} from '../pages/route-finder/route-finder';
import {Places} from '../pages/places/places';
import {Login} from '../pages/login/login';
import {Equipment} from '../pages/equipment/equipment';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Geolocation} from '@ionic-native/geolocation';

import {Directions} from '../pages/directions/directions';
import {Signup} from '../pages/signup/signup';
import {Hotels} from "../pages/hotels/hotels";
import {MorePage} from '../pages/more/more';
import {EquipmentGallery} from "../pages/equipmentgallery/equipmentgallery";

// Import the AF2 Module
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { Business } from '../pages/business/business';
import { Booking } from '../pages/booking/booking';
import { Weather } from '../pages/weather/weather';
import {GlobalProvider} from "../providers/global-provider.service";
import {WeatherData} from "../providers/weather-data";
import {WeatherforecastPage} from "../pages/weatherforecast/weatherforecast";
import {HttpModule} from "@angular/http";



// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDRh5UlR5gh8hIIzPYcICv0o-29TAi19ZI",
  authDomain: "traveldb-43fbd.firebaseapp.com",
  databaseURL: "https://traveldb-43fbd.firebaseio.com",
  projectId: "traveldb-43fbd",
  storageBucket: "",
  messagingSenderId: "6054880400"
};


let pageArr = [MyApp,
  HomePage,
  // ListPage,
  VehiclePage,
  AccomodationPage,
  Guide,
  RouteFinder,
  Places,
  Equipment,
  Login,
  Directions,
  Signup,
  Hotels,
  MorePage,
  EquipmentGallery,
  Business,
  Booking,
  Weather,
  WeatherforecastPage


];

@NgModule({
  declarations: pageArr,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: pageArr,
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GlobalProvider,
    WeatherData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
