import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import {Booking} from '../booking/booking';
import {Login} from "../login/login";
import {MyProfile} from "../my-profile/my-profile";
import {GlobalProvider} from "../../providers/global-provider.service";
import {Places} from "../places/places";
import {AccomodationPage} from "../accomodation/accomodation";

/**
 * Generated class for the Hotels page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html',

})
export class Hotels {
  toggoleShowHide: string;
  hotelreviews: Observable<any>;
  hotelreviewList: AngularFireList<any>;

  public hotel:any;

  public rate: any;
  public reviewer: any = {};

  public ratingNames: any[];
  // colors
  defaultStar = "star-outline";
  clickedStar = "star";
  public ratingSum = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public afDatabase: AngularFireDatabase, public  globalProvider: GlobalProvider) {
    this.ratingNames = [this.defaultStar, this.defaultStar, this.defaultStar, this.defaultStar, this.defaultStar];

    this.hotel = navParams.get("hotel");
    console.log("hotel page : ", this.hotel);
    // let rating = parseInt(this.hotel.rating) - 1;
    // this.ratingStarClicked(rating);

    this.hotelreviewList = afDatabase.list('/accommodations/' + this.hotel.id + '/reviews');
    this.hotelreviews = this.hotelreviewList.valueChanges();

    console.log("Hotelreviews : ", this.hotelreviews);
    this.calcRating();
    this.resetReview();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hotels');
  }

  calcRating() {
    let sum = 0;
    let count = 0;
    this.hotelreviews.forEach(element => {
      element.forEach(review => {
        console.log("HOTEL calculating review : ", review);
        sum += review.rating;
        count++;
        console.log("HOTEL calculating review count : ", count);
        console.log("HOTEL calculating review sum : ", sum);
        this.ratingSum = sum / count;
        console.log("HOTEL calculating review rating : ", this.ratingSum);
      });
    });
  }

  // Adding reveiws using a prompt box
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
          name: 'email',
          placeholder: 'Email'
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
            const newhotelReviewRef = this.hotelreviewList.push({});
            console.log("More data add : " + newhotelReviewRef.key + " data : " + data);

            newhotelReviewRef.set({
              id: newhotelReviewRef.key,
              name: data.name,
              email: data.email,
              review: data.review
            });
          }
        }
      ]
    });
    prompt.present();

  }

  showReviews() {


  }

  openUrl() {
    // window.open('http://www.cinnamonhotels.com/en/cinnamongrandcolombo/?gclid=Cj0KCQjwodrXBRCzARIsAIU59TJ7u8aVTwPpcMROrv42QUDb7fuI-4ZyoVIpBNOAu_RLIkCjwMY_VukaAk44EALw_wcB');
    if (this.hotel.website.startWith('http'))
      this.hotel.website = 'http://' + this.hotel.website;
    window.open(this.hotel.website);
  }


  deleteItem(itemID): void {
    console.log("HOTEL DELETE item ID : ", itemID);
    let prompt = this.alertCtrl.create({
      title: 'Delete Review',

      buttons: [{
        text: "Cancel",
        handler: data => {
          console.log("Cancel Clicked");
        }
      },
        {
          text: "Delete",
          handler: data => {
            this.hotelreviewList.remove(itemID);
          }

        }
      ]
    })

    prompt.present();
  }

  sendReview() {
    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: AccomodationPage
      });
    } else {
      const newReviewRef = this.hotelreviewList.push({});
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

  openBooking() {
    this.navCtrl.push(Booking)
  }

  openmyProfile() {
    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: MyProfile
      });
    } else
      this.navCtrl.push(MyProfile);
  }

  addToFavorite() {
    console.log("Favorite click : ", this.hotel.name);
    console.log("Favorite click user : ", this.globalProvider.loggedInUser);

    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: AccomodationPage
      });
    } else {
      this.globalProvider.addToFavorite("accommodations", this.hotel);
    }
  }

}
