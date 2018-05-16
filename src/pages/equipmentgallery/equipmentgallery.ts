import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import { Directions } from '../directions/directions';

@Component({
  selector: 'page-equipmentgallery',
  templateUrl: 'equipmentgallery.html',
})
export class EquipmentGallery {

  category: any;
  items: Observable<any>;
  itemList: AngularFireList<any>;
  public pageTitle:string;

  constructor(public navCtrl: NavController, public afDatabase: AngularFireDatabase, public alertCtrl: AlertController, public navParams: NavParams) {
    this.category = navParams.get("category");
    this.pageTitle = this.category;
    this.category = this.category.toLowerCase();
    let path = '/equipments/' + this.category;
    console.log("Equipment path : " + path);
    this.itemList = afDatabase.list(path);
    this.items = this.itemList.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Equipment Gallery');
  }

  openMoreDetails() {
    this.navCtrl.push(EquipmentGallery)
  }
  initializeitems() {
    this.itemList = this.itemList;
  }

  openDirections() {
    this.navCtrl.push(Directions,
      {
        destination: { lat: 6.879127, lng: 79.859740 }
      });
  }
  opencall() {
    console.log("calling number");
  }
  addTocart(){



    
  }
  getTopics(searchbar){
    this.initializeitems();
  }

  addEquipment() {
    let prompt = this.alertCtrl.create({
      title: 'New ' + this.pageTitle,
      message: "Enter the details of the equipment to add",
      inputs: [
        {
          name: 'itemname',
          placeholder: 'Item Name'
        },
        {
          name: 'price',
          placeholder: ' Price'
        },

      {

        name: 'quantity',
        placeholder: 'Quantity '
      },
      {

        name: 'image',
        placeholder: 'Image '
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
            const newEquipmentRef = this.itemList.push({});

            newEquipmentRef.set({
              id: newEquipmentRef.key,
              itemname: data.itemname,
              price: data.price,
              quantity: data.quantity,
              image: 'assets/img/'+ data.image
            });
          }
        }
      ]
    });
    prompt.present();
  }

}
