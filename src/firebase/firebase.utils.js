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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('Error creating user: ', error.message)
        }
     }
     return userRef;

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;