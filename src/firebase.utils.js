import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2BLx_VbUsAH5vp6gpllRsitpiIqOmYfU",
  authDomain: "todo-tracker-d43a8.firebaseapp.com",
  databaseURL: "https://todo-tracker-d43a8.firebaseio.com",
  projectId: "todo-tracker-d43a8",
  storageBucket: "todo-tracker-d43a8.appspot.com",
  messagingSenderId: "710642039188",
  appId: "1:710642039188:web:822154ccc516e7866d3781",
  measurementId: "G-LT94VX8J18",
};

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
