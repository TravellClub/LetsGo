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
import { Login } from '../pages/login/login';
import { Equipment } from '../pages/equipment/equipment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Directions } from '../pages/directions/directions';
import { Signup } from '../pages/signup/signup';




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
    Login,
    Directions,
    Signup
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    Login,
    Directions,
    Signup
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
