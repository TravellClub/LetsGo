import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Directions } from '../directions/directions';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import { Weather } from '../weather/weather'


/**
 * Generated class for the More page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})

export class MorePage {

  reviews:  Observable<any>;
  reviewList:  AngularFireList<any>;
  public rate:any;

  public reviewer:any = {};
  public place:any;

  public ratingNames: any[];
  // colors
  defaultStar = "star-outline";
  clickedStar = "star";

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public afDatabase: AngularFireDatabase) {

    this.place = navParams.get('place');
    console.log("MORE place : ", this.place);
    this.reviewList = afDatabase.list('/places/' + this.place.id + '/reviews');
    this.reviews = this.reviewList.valueChanges();

    this.ratingNames = [this.defaultStar, this.defaultStar, this.defaultStar, this.defaultStar, this.defaultStar]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad More');
  }

  openDirections(){
    this.navCtrl.push(Directions,
      {
        destination : {lat: 6.879127, lng: 79.859740}
      });
  }

  openWeather(){
    this.navCtrl.push(Weather);
  }

  // sendClick(){
  //
  //     let prompt = this.alertCtrl.create({
  //       title: 'Add Review',
  //      // message: "Enter a name for this new song you're so keen on adding",
  //       inputs: [
  //         {
  //           name: 'name',
  //           placeholder: 'Name'
  //         },
  //         {
  //           name: 'review',
  //           placeholder:'Review'
  //         },
  //
  //       ],
  //       buttons: [
  //         {
  //           text: 'Cancel',
  //           handler: data => {
  //             console.log('Cancel clicked');
  //           }
  //         },
  //         {
  //           text: 'Save',
  //           handler: data => {
  //             const newReviewRef = this.reviewList.push({});
  //             console.log("More data add : " + newReviewRef.key + " data : " + data);
  //
  //             newReviewRef.set({
  //               id: newReviewRef.key,
  //               name : data.name,
  //               review : data.review
  //             });
  //           }
  //         }
  //       ]
  //     });
  //     prompt.present();
  //   }

  sendReview(){
    const newReviewRef = this.reviewList.push({});
    console.log("More data add : " + newReviewRef.key + " data : " + this.reviewer);

    newReviewRef.set({
      id: newReviewRef.key,
      name : this.reviewer.name,
      review : this.reviewer.review,
      rating : this.reviewer.rating
    });
    this.resetReview();
  }

  ratingStarClicked(starNumber) {
    console.log("star clicked : " + starNumber);
    for (let i = 0; i <= starNumber; i++) {
      this.ratingNames[i] = this.clickedStar;
    }
    for (let j = starNumber + 1; j < 5; j++) {
      this.ratingNames[j] = this.defaultStar;
    }
    let rating = starNumber + 1;
    this.reviewer.rating = rating;

  }

  resetReview(){
    this.reviewer = {};
  }

  onRatingChange(){
    let rat = this.rate;
    console.log("Rating : ",rat);
  }

}
