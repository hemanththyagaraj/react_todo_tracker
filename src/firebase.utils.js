import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase
