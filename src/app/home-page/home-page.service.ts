import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})

export class HomePageService {

  constructor(private fireStore: AngularFirestore) { }

  // usersList: AngularFireList<any>;

    userList: AngularFirestoreCollection<User>;

  getUsers() {
    // this.usersList = this.fireStore.list('/Users');
    // return  this.usersList.snapshotChanges();
    return this.fireStore.collection('Users', ref => ref.where('Email', '==', 'narendrareddy1996@gmail.com')).valueChanges();
  }
}

interface User {
  Email?: string;
  FirstName?: string;
  LastName?: string;
  Password?: string;
}
