import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook/ngx';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  providerFb: firebase.auth.FacebookAuthProvider;
  // fb: Facebook;
  constructor(public fb: Facebook, public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public platform: Platform) {
    // this.providerFb = new firebase.auth.FacebookAuthProvider();
  }
  ngOnInit() {
  }
  // facebookLogin() {
  //   if (this.platform.is('cordova')) {
  //     console.log('PLateforme cordova');
  //     this.facebookCordova();
  //   } else {
  //     console.log('PLateforme Web');
  //     // this.facebookWeb();
  //   }
  // }
  // facebookCordova() {
  //   this.fb.login(['email']).then((response) => {
  //     const facebookCredential = firebase.auth.FacebookAuthProvider
  //       .credential(response.authResponse.accessToken);
  //     firebase.auth().signInWithCredential(facebookCredential)
  //       .then((success) => {
  //         console.log('Info Facebook: ' + JSON.stringify(success));
  //         this.afDB.object('Users/' + success.user.uid).set({
  //           displayName: success.user.displayName,
  //           photoURL: success.user.photoURL
  //         });
  //       }).catch((error) => {
  //         console.log('Erreur: ' + JSON.stringify(error));
  //       });
  //   }).catch((error) => { console.log(error); });
  // }
  // facebookWeb() {
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  //     .then((success) => {
  //       console.log('Info Facebook: ' + JSON.stringify(success));
  //     }).catch((error) => {
  //       console.log('Erreur: ' + JSON.stringify(error));
  //     });
  // }
}
