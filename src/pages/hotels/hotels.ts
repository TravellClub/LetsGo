import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import { Booking } from '../booking/booking';

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
  hotelreviews:  Observable<any>;
  hotelreviewList:  AngularFireList<any>;
  // Calling the added reviews to the page
  public buttonClicked: boolean = false;

  public ratings: any[];

  public buttonClicked1: boolean = false;
  public hotel;
 
  public buttonClick: boolean = false; //Whatever you want to initialise it as

    public Click() {

        this.buttonClick = !this.buttonClick;
    }

  // colors
  defaultColor = "light";
  likedColor = "secondary";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public afDatabase: AngularFireDatabase) {
    this.ratings = [this.defaultColor,this.defaultColor,this.defaultColor,this.defaultColor,this.defaultColor]
    this.hotelreviewList = afDatabase.list('/hotelreviews');
    this.hotelreviews = this.hotelreviewList.valueChanges();

    console.log("Hotelreviews : ",this.hotelreviews);
   this.hotel = navParams.get("hotel");
   console.log("hotel page : " , this.hotel);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hotels');
  }
  // Adding reveiws using a prompt box
  sendClick(){
    
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
          placeholder:'Email'
        },
        {
          name: 'hotelreviews',
          placeholder:'Review'
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
              name : data.name,
              email : data.email,
              hotelreviews : data.hotelreviews
            });
          }
        }
      ]
    });
    prompt.present();
  
  }
  showReviews() {



  }
  openUrl(){window.open('http://www.cinnamonhotels.com/en/cinnamongrandcolombo/?gclid=Cj0KCQjwodrXBRCzARIsAIU59TJ7u8aVTwPpcMROrv42QUDb7fuI-4ZyoVIpBNOAu_RLIkCjwMY_VukaAk44EALw_wcB');  }


  public onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
  }

  public onButtonClick1() {

    this.buttonClicked1 = !this.buttonClicked1;

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

  ratingStarClicked(starNumber){
    console.log("start clicked : " + starNumber);
    for(let i = 0; i<= starNumber; i++){
      this.ratings[i] = this.likedColor;
    }
    for(let j = starNumber + 1; j < 5; j++){
      this.ratings[j] = this.defaultColor;
    }
    
  }

  getStarColor(starNumber){
    // console.log("star color changed : " + starNumber + " color : "+ this.ratings[starNumber]);
    return this.ratings[starNumber];
  }

   openBooking(){
    this.navCtrl.push(Booking)
   }
  
  }

  
