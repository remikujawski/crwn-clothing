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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch (error){
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;