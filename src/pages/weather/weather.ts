import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import {Weather1} from '../../providers/weather';

//$IONICPAGE
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class Weather {

 /* weather: any;
  public cityWeather;
  public  forecast = [];*/


  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // this.cityWeather = NavParams.get('cityWeather');
   // this.getForecast(this.cityWeather.id);

  }

 /* getForecast(cityId){


    this.weather.forecast(cityId,7)
    .map(data => data.json())
    .subscribe(data => {
      this.forecast = data.list;
    },
    err => console.log(err),
    () => console.log('forecast compelete')
    )
      }*/
    



  ionViewDidLoad() {
    console.log('ionViewDidLoad Weather');
  }

}
