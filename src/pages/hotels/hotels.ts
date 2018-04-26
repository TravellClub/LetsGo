import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  alertCtrl: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hotels');
  }
  // Adding reveiws using a prompt box
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Add Reviews',
      //message: "Add a Review",
      inputs: [
        {
          name: 'text',
          placeholder: 'Text'
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
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present()
  }

  showReviews(){

    

  }

}

  


