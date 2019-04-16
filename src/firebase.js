import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBS-Meh4L8Q4_Fs05Nsv_mSaipTJ5tcipQ",
  authDomain: "man-city-soccer.firebaseapp.com",
  databaseURL: "https://man-city-soccer.firebaseio.com",
  projectId: "man-city-soccer",
  storageBucket: "man-city-soccer.appspot.com",
  messagingSenderId: "708444437740"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches'); 

export {
  firebase,
  firebaseMatches
}