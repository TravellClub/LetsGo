import { Component } from '@angular/core';
//import { AppComponent } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MorePage } from '../more/more';
//import { Geolocation } from '@ionic-native/geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';
import { Reference} from '@firebase/database';
import {Observable} from "rxjs/Observable";
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class Places {

  items:  Observable<any>;
  itemsList:  Array<any>;
  places: AngularFireList<any>;
  loaditemsList: Array<any>;


  restuarents: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public geolocation: Geolocation, afDatabase: AngularFireDatabase){//public _myservice: myService) {
    this.places = afDatabase.list('/places');
    this.items = this.places.valueChanges();
    let plac = [];
    this.items.forEach(element => {
      element.forEach(pla => {
        plac.push(pla);
        console.log("Pla",pla);
      })
    });

      this.itemsList = plac;
      this.loaditemsList = plac;
  }

  initializeitems(){
    this.itemsList = this.loaditemsList;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Places');
    
  }
  
openmore(){
   this.navCtrl.push(MorePage);
  }

addplaces(){
  let prompt = this.alertCtrl.create({
    title: 'Add Places',
   // message: "Enter a name for this new song you're so keen on adding",
    inputs: [
      {
        name: 'placename',
        placeholder: 'Place name'
      },
      {
        name: 'description',
        placeholder:'Description'
      },
      {
        name: 'latitiude',
        placeholder:'Latitude'
      },
      {
        name: 'longitude',
        placeholder:'Longitude'
      },
      {
        name: 'district',
        placeholder:'District'
      },
      {
        name: 'image',
        placeholder:'Image path'
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
          const newPlacesRef = this.places.push({});
          console.log("More data add : " + newPlacesRef.key + " data : " + data);

          newPlacesRef.set({
            id: newPlacesRef.key,
            placename : data.placename,
            description : data.description,
            latitiude : data.latitiude,
            longitude : data.longitude,
            district : data.district,
            image : data.image
          });
        }
      }
    ]
  });
  prompt.present();


  /*this.geolocation.getCurrentPosition().then((position) => {
    this.addMarker(this.currentPosition,"Current Position");*/
}



getPlaces(searchbar){
  this.initializeitems();

  // set s to the value of the searchbar
  var s = searchbar.srcElement.value;

  // if the value is an empty string don't filter the items
  if(!s){
    return;
  }

  this.itemsList = this.itemsList.filter((a) => {
    if(a.district && s) {
      if(a.district.toLowerCase().indexOf(s.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });

  console.log(this.itemsList.length);
}


}
