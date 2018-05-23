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
    this.cityList.set('Beruwala',1249931);
    this.cityList.set('Colombo', 1248991);
    this.cityList.set('Dambulla', 1248749);
    this.cityList.set('Galle', 1246294);
    this.cityList.set('Hanwella',1244773);
    this.cityList.set('Haputale', 1244713);
    this.cityList.set('Hatton', 1244596);
    this.cityList.set('Kandy', 1241622);
    this.cityList.set('Kelaniya', 1240622,);
    this.cityList.set('Kurunegala',1237980);
    this.cityList.set('Maharagama', 1236854);
    this.cityList.set('Negambo', 1233369);
    this.cityList.set('Nuwaraeliya', 1232783);
    this.cityList.set('Polonnaruwa', 1229901 );
    this.cityList.set('Rathnapura', 1228730);
    this.cityList.set('Sigirya', 1228051);
    this.cityList.set('Trincomalee', 1226260);
    this.cityList.set('Jaffna', 1242833);
  

    //get weather data
    let cityId = this.cityList.get(this.city);
    console.log('WEATHER ID : ',cityId);
    weatherService.fetchDailyData(cityId);
  }

 
}
