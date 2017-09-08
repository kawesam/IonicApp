import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home'
import {AuthServiceProvider} from "../../providers/auth-service/auth-service"


/**
 * Generated class for the RegistrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  firstname : string;
  lastname  : string;
  email : string;
  phone : string;
  password: string;

  loading :any;
  //regData = {firstname:'',lastname:'',email: '',phone:'',password:''}
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl : LoadingController ,public authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  submitUser(){
    this.showloader();

    let data = {
      firstname : this.firstname,
      lastname  : this.lastname,
      email     : this.email,
      phone     : this.phone,
      password  : this.password

    }
    console.log(data);
    this.authService.register(data)
      .subscribe(data=>{
      this.loading.dismiss();
     // this.navCtrl.pop();
      console.log('Got some data:');
      this.navCtrl.setRoot(HomePage);
    },(err) => {
        this.loading.dismiss();
    });

  }

  showloader(){
    this.loading  = this.loadingCtrl.create({
      content : "Registering the user.."
    });

    this.loading.present();
  }


}
