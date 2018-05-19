import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Directions } from '../directions/directions';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import { Weather } from '../weather/weather'
//$IMPORTSTATEMENT

/**
 * Generated class for the More page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})

export class MorePage {

  hreviewList: any;
  reviews:  Observable<any>;
  reviewList:  AngularFireList<any>;

  // Calling the added reviews to the page
  public buttonClicked: boolean = false; 

  public onButtonClick() {

      this.buttonClicked = !this.buttonClicked;
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public afDatabase: AngularFireDatabase) {
    this.reviewList = afDatabase.list('/reviews');
    this.reviews = this.reviewList.valueChanges();

    console.log("Reviews : ",this.reviews);

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

  sendClick(){
    
      let prompt = this.alertCtrl.create({
        title: 'Add Review',
    
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
            name: 'review',
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
              const newReviewRef = this.reviewList.push({});
              console.log("More data add : " + newReviewRef.key + " data : " + data);
  
              newReviewRef.set({
                id: newReviewRef.key,
                name : data.name,
                email : data.email,
                reviews : data.review
              });
            }
          }
        ]
      });
      prompt.present();
    }

}
