import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

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

  addEquipment() {
    let prompt = this.alertCtrl.create({
      title: 'New ' + this.pageTitle,
      message: "Enter the details of the equipment to add",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'description',
          placeholder: ' Description'
        }
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
              title: data.title,
              description: data.description,
              image: "\\assets\\img\\images (1).jpg"
            });
          }
        }
      ]
    });
    prompt.present();
  }

}
