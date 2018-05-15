
 
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Note } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import{components,Input} from'@angular/core';
//import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

 
/**
 * Generated class for the Booking page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class Booking {
  
  id:any;
  childrens: any;
  Adults: any;
  checkou: any;
  checkin: any;
  
  items: any;
  public bookForm;

  public book={};
  langs;
  langform;
 Booking:AngularFireList<any>;

 

  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase, _form: FormBuilder
    ,public alerCtrl: AlertController) {
    this.Booking= afDatabase.list('/book');
    this.items = this.Booking.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Booking');
  }

  

 booking()
 {
   console.log('ionViewDidLoad Booking');
   console.log('book:',this.book);
   let newbookRef=this.Booking.push({});

   newbookRef.set({

     id: newbookRef.key,
     checkin: this.checkin,
     checkou:this.checkou,
     Adults:this.Adults,
     childrens:this.childrens,
   });
   let alert = this.alerCtrl.create({
    title: 'Congratulations!',
    message: 'You have signed up successfully',
    buttons: ['Ok']
  });
  alert.present()

 }
 

 
}

