import firebase from './config/firebase';
import { setUser, setDefaultUser } from './store/actions/auth';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    setUser(user);
  } else {
    setDefaultUser();
  }
});