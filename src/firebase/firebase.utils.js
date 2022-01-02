import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC_otu2dJEC4wh7N1U5MTDFStpZOYowPK0",
    authDomain: "crwn-db-ff171.firebaseapp.com",
    projectId: "crwn-db-ff171",
    storageBucket: "crwn-db-ff171.appspot.com",
    messagingSenderId: "500405680228",
    appId: "1:500405680228:web:60329f2a6efc3c92f00771"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;