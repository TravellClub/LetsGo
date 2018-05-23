import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import {Booking} from '../booking/booking';
import {Login} from "../login/login";
import {MyProfile} from "../my-profile/my-profile";
import {GlobalProvider} from "../../providers/global-provider.service";

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
  // Calling the added reviews to the page
  public buttonClicked: boolean = false;

  public ratings: any[];

  public buttonClicked1: boolean = false;
  public hotel;

  public buttonClick: boolean = false; //Whatever you want to initialise it as

  public Click() {

    this.buttonClick = !this.buttonClick;
  }


  public ratingNames: any[];
  // colors
  defaultStar = "star-outline";
  clickedStar = "star";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public afDatabase: AngularFireDatabase, public  globalProvider: GlobalProvider) {
    this.ratingNames = [this.defaultStar, this.defaultStar, this.defaultStar, this.defaultStar, this.defaultStar];

    this.hotel = navParams.get("hotel");
    console.log("hotel page : ", this.hotel);
    let rating = parseInt(this.hotel.rating) - 1;
    this.ratingStarClicked(rating);

    this.hotelreviewList = afDatabase.list('/accommodations/' + this.hotel.id + '/reviews');
    this.hotelreviews = this.hotelreviewList.valueChanges();

    console.log("Hotelreviews : ", this.hotelreviews);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hotels');
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


  ratingClick() {
    // const alert = this.alertCtrl.create({
    //   title: 'Rate your speech:',
    //   subTitle: 'bleu',
    //   cssClass: 'alertstar',
    //   enableBackdropDismiss: false,
    //   buttons: [
    //     { text: '1', handler: data => { this.resolveRec(1); } },
    //     { text: '2', handler: data => { this.resolveRec(2); } },
    //     { text: '3', handler: data => { this.resolveRec(3); } },
    //     { text: '4', handler: data => { this.resolveRec(4); } },
    //     { text: '5', handler: data => { this.resolveRec(5); } }
    //   ]
    // });
    // alert.present();


  }

  ratingStarClicked(starNumber) {
    console.log("start clicked : " + starNumber);
    for (let i = 0; i <= starNumber; i++) {
      this.ratingNames[i] = this.clickedStar;
    }
    for (let j = starNumber + 1; j < 5; j++) {
      this.ratingNames[j] = this.defaultStar;
    }
    let rating = starNumber + 1;
    let hotelRef = this.afDatabase.list('/accommodations/')
    hotelRef.update(this.hotel.id, {
      rating: rating.toString()
    });

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

}
