import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherData {

  temp: string;
  clouds: string;
  humidity: string;
  pressure: string;
  windspeed: string;
  maxtemp: string;
  mintemp: string;
  iconx: string;
  dailyData: any[];
  constructor(public http: Http) {
    console.log('Hello WeatherData Provider');
  }

  fetchData(id: number): void {

    let url = 'http://api.openweathermap.org/data/2.5/weather?id=' + id + '&appid=165c1af2ccf22cc607ce1bd4ec1cf11f&units=metric';


    //Make a Http request to the URL and subscribe to the response
    this.http.get(url).map(res => res.json()).subscribe(data => {
      this.iconx = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";;
      this.temp = data.main.temp;
      this.clouds = data.weather[0].description;
      this.humidity = data.main.humidity;
      this.pressure = data.main.pressure;
      this.windspeed = data.wind.speed;
      this.maxtemp = data.main.temp_max;
      this.mintemp = data.main.temp_min;

    }, (err) => {
      //Fail and log the err in console
      console.log("weather id is not found!");
    });


  }

  fetchDailyData(id: number): void {

    let url = 'http://api.openweathermap.org/data/2.5/forecast?id=' + id + '&appid=165c1af2ccf22cc607ce1bd4ec1cf11f&units=metric';


    //Make a Http request to the URL and subscribe to the response
    // this.http.get(url).map(res => res.json()).subscribe(data => {
    //   console.log("daily : " + data.main.temp);
    //   this.dailyData =  data;

    // }, (err) => {
    //     //Fail and log the err in console
    //     console.log("weather id is not found!");
    // });

    // this.dailyData = this.http.get(url).map(res => res.json());
this.http.get(url).map(res => res.json()).subscribe(data => {
      // console.log("daily : " + data + " daar : " + this.dailyData);
      this.dailyData = data.list;
console.log("dataaa : " , this.dailyData);
    }, (err) => {
        //Fail and log the err in console
        console.log("weather id is not found!");
    });
  }

}
