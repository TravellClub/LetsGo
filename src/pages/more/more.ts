import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {Directions} from '../directions/directions';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import {GlobalProvider} from "../../providers/global-provider.service";
import {WeatherforecastPage} from "../weatherforecast/weatherforecast";
import {Places} from "../places/places";
import {Login} from "../login/login";
import {MyProfile} from "../my-profile/my-profile";


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

  reviews: Observable<any>;
  reviewList: AngularFireList<any>;
  public rate: any;

  public reviewer: any = {};
  public place: any;

  public ratingNames: any[];
  // colors
  defaultStar = "star-outline";
  clickedStar = "star";

  public ratingSum = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public afDatabase: AngularFireDatabase, public globalProvider
    : GlobalProvider) {

    this.place = navParams.get('place');
    console.log("MORE place : ", this.place);
    this.reviewList = afDatabase.list('/places/' + this.place.id + '/reviews');
    this.reviews = this.reviewList.valueChanges();
    this.calcRating();
    this.ratingNames = [this.defaultStar, this.defaultStar, this.defaultStar, this.defaultStar, this.defaultStar];
    this.resetReview();

  }

  calcRating() {
    let sum = 0;
    let count = 0;
    this.reviews.forEach(element => {
      element.forEach(review => {
        console.log("PLACES calculating review : ", review);
        sum += review.rating;
        count++;
        console.log("PLACES calculating review count : ", count);
        console.log("PLACES calculating review sum : ", sum);
        this.ratingSum = sum / count;
        console.log("PLACES calculating review rating : ", this.ratingSum);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad More');
  }

  openDirections(latitiude, longitude) {
    this.navCtrl.push(Directions,
      {
        destination: {lat: latitiude, lng: longitude}
      });
  }

  // openWeather(){
  //   this.navCtrl.push(Weather);
  // }

  sendClick() {

    let prompt = this.alertCtrl.create({
      title: 'Add Review',
      // message: "Enter a name for this new song you're so keen on adding",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'review',
          placeholder: 'Review'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            const newReviewRef = this.reviewList.push({});
            console.log("More data add : " + newReviewRef.key + " data : " + data);

            newReviewRef.set({
              id: newReviewRef.key,
              name: data.name,
              review: data.review
            });
          }
        }
      ]
    });
    prompt.present();
  }

  sendReview() {
    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: Places
      });
    } else {
      const newReviewRef = this.reviewList.push({});
      console.log("More data add : " + newReviewRef.key + " data : " + this.reviewer);

      newReviewRef.set({
        id: newReviewRef.key,
        name: this.reviewer.name,
        review: this.reviewer.review,
        rating: this.reviewer.rating,
        user: this.globalProvider.loggedInUser.id
      });
      this.resetReview();
    }
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

  resetReview() {
    if (this.globalProvider.loggedInUser != null) {
      this.reviewer.name = this.globalProvider.loggedInUser.firstname;
    } else
      this.reviewer.name = "";
    this.reviewer.review = "";
    this.ratingNames = [this.defaultStar, this.defaultStar, this.defaultStar, this.defaultStar, this.defaultStar];
  }


  openWeather(name): void {
    this.navCtrl.push(WeatherforecastPage, {
      city: name
    });
  }

  deleteItem(itemID): void {
    console.log("PLACES DELETE item ID : ", itemID);
    let prompt = this.alertCtrl.create({
      title: 'Delete Item',

      buttons: [{
        text: "Cancel",
        handler: data => {
          console.log("Cancel Clicked");
        }
      },
        {
          text: "Delete Item",
          handler: data => {
            this.reviewList.remove(itemID);
          }

        }
      ]
    })

    prompt.present();
  }

  openmyProfile() {
    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: MyProfile
      });
    } else
      this.navCtrl.push(MyProfile);
  }
}
