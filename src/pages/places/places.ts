import { Component } from '@angular/core';
//import { AppComponent } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MorePage } from '../more/more';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { myService } from '../service';


// $IMPORTSTATEMENT

/**
 * Generated class for the Places page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class Places {


  restuarents: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, angFire: AngularFireDatabase){//public _myservice: myService) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Places');
    
  }
  
openmore(){
   this.navCtrl.push(MorePage);
  }
//Search action

/*selectSearchResult(item){
  this.autocompleteItems = [];

  this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
    if(status === 'OK' && results[0]){
			this.autocompleteItems = [];
			this.GooglePlaces.nearbySearch({
				location: results[0].geometry.location,
				radius: '500',
				types: ['restaurant'],
				// key: 'YOUR_KEY_HERE'
			}, (near_places) => {
					this.zone.run(() => {
            this.nearbyItems = [];
            for (var i = 0; i < near_places.length; i++) {
              this.nearbyItems.push(near_places[i]);
            }
        });
    	})
    }
  })
}*/



}
