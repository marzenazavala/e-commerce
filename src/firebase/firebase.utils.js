import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB_m4DVezWOkRLgM5j04mE1nhQwiQMiLls",
    authDomain: "gato-67e5a.firebaseapp.com",
    databaseURL: "https://gato-67e5a.firebaseio.com",
    projectId: "gato-67e5a",
    storageBucket: "gato-67e5a.appspot.com",
    messagingSenderId: "607269623196",
    appId: "1:607269623196:web:311e4f829d809a8e3b6459",
    measurementId: "G-SQHER63YJ0"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;