import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import { Direction } from '../direction/direction';
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

  // Calling the added reviews to the page
  public buttonClicked: boolean = false; 

  public onButtonClick() {

      this.buttonClicked = !this.buttonClicked;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad More');
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
