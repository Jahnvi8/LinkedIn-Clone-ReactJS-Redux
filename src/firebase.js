import firebase from "firebase";
// import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp-6gf85CpoyGwOcguWSIEe-IXf2qZdq8",
  authDomain: "linkedin-clone-aad9a.firebaseapp.com",
  projectId: "linkedin-clone-aad9a",
  storageBucket: "linkedin-clone-aad9a.appspot.com",
  messagingSenderId: "436098870160",
  appId: "1:436098870160:web:d694be5c659df6f8cc6115",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
