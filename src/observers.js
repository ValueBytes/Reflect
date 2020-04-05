import firebase from './config/firebase';
import { setUser } from './store/actions/auth';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    setUser(user);
  } else {
    console.log('Not signed in');
  }
});