import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDbRIYd909JHYqIKCvpTSNdeC6ipiYhdyM",
  authDomain: "reflect-a85a4.firebaseapp.com",
  databaseURL: "https://reflect-a85a4.firebaseio.com",
  projectId: "reflect-a85a4",
  storageBucket: "reflect-a85a4.appspot.com",
  messagingSenderId: "470361258575",
  appId: "1:470361258575:web:4088744be82050c1e4083a"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore;

export default firebase;