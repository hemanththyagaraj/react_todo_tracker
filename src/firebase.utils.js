import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  // YOUR_CONFIG_HERE
};

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const deleteDocument = (id, onSuccess, onError) => {
  debugger;
  fireStore
    .collection("todos")
    .doc(id)
    .delete()
    .then(() => {
      onSuccess("Successfully deleted the document");
    })
    .catch((err) => {
      onError(err);
    });
};

export default firebase;
