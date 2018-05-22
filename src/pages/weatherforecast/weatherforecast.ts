import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {WeatherData} from "../../providers/weather-data";

@Component({
  selector: 'page-weatherforecast',
  templateUrl: 'weatherforecast.html'
})
export class WeatherforecastPage {
  city: any;

  cityList = new Map();
  constructor(public navCtrl: NavController, public navParams: NavParams, public weatherService: WeatherData) {
    this.city = navParams.get('city');

    console.log('WEATHER City : ',this.city);

    //Map city list
    this.cityList.set('Ampara',1251459);
    this.cityList.set('Anuradhapura',1251081);

    //get weather data
    let cityId = this.cityList.get(this.city);
    console.log('WEATHER ID : ',cityId);
    weatherService.fetchDailyData(cityId);
  }

  // this.countries = [
  //   new Country(1251459, 'Ampara', 'LK'),
  //   new Country(1251081, 'Anuradhapura', 'LK'),
  //   new Country(1249931, 'Beruwala', 'LK'),
  //   new Country(1248991, 'Colombo', 'LK'),
  //   new Country(1248749, 'Dambulla', 'LK'),
  //   new Country(1246294, 'Galle', 'LK'),
  //   new Country(1244773, 'Hanwella', 'LK'),
  //   new Country(1244713, 'Haputale', 'LK'),
  //   new Country(1244596, 'Hatton', 'LK'),
  //   new Country(1241622, 'Kandy', 'LK'),
  //   new Country(1240622, 'Kelaniya', 'LK'),
  //   new Country(1237980, 'Kurunegala', 'LK'),
  //   new Country(1236854, 'Maharagama', 'LK'),
  //   new Country(1233369, 'Negambo', 'LK'),
  //   new Country(1232783, 'Nuwaraeliya', 'LK'),
  //   new Country(1229901, 'Polonnaruwa', 'LK'),
  //   new Country(1228730, 'Rathnapura', 'LK'),
  //   new Country(1228051, 'Sigirya', 'LK'),
  //   new Country(1226260, 'Trincomalee', 'LK'),
  //   new Country(1242833, 'Jaffna', 'LK'),
  //
  // ];
}
