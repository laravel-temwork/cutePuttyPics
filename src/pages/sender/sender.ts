import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { SendmoneyPage } from '../sendmoney/sendmoney';
import { ReceivemoneyPage } from '../receivemoney/receivemoney';
import { VerifypaypalPage } from '../verifypaypal/verifypaypal';
import { ReportPage } from '../report/report';
import { SettingsPage } from '../settings/settings';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sender',
  templateUrl: 'sender.html',
})
export class SenderPage {
  public user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SenderPage');
    console.log(this.user.fullname);

  }
 goSendmoney(){
  this.navCtrl.push(SendmoneyPage, {
    user:this.user
  });
 }
 goReceivemoney(){
  this.navCtrl.push(ReceivemoneyPage, {
    user:this.user
  });
 }
 goVerifypaypal(){
  this.navCtrl.push(VerifypaypalPage, {
    user:this.user
  });
 }
 goReports(){
  this.navCtrl.push(ReportPage, {
    user:this.user
  });
 }
 goSettings(){
  this.navCtrl.push(SettingsPage, {
    user:this.user
  });
 }
 goLogout(){
  this.navCtrl.push(LoginPage, {
    user:this.user
  });
 }
}