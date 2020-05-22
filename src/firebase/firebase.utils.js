import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhgll0jomp3jReWO68H1FLL-Z9GiB6e0o",
  authDomain: "schl-db.firebaseapp.com",
  databaseURL: "https://schl-db.firebaseio.com",
  projectId: "schl-db",
  storageBucket: "schl-db.appspot.com",
  messagingSenderId: "127737538192",
  appId: "1:127737538192:web:35ac680fc1fc341d4f5a15",
  measurementId: "G-6QZ5WZQ8FR",
};

//this function allows us to take the user object we got from auth library and store it in database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //if snapshot does not exist create data from userAuth object
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating Student Data", error.message);
    }
  }

  return userRef;
  // console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
