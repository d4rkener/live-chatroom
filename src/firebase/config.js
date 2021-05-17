import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1dJ8Lsq0FnSpMl3pRB6x-5PDm9V22xcc",
  authDomain: "live-chatroom-c4a87.firebaseapp.com",
  projectId: "live-chatroom-c4a87",
  storageBucket: "live-chatroom-c4a87.appspot.com",
  messagingSenderId: "556274634497",
  appId: "1:556274634497:web:ab59ecb50279de68f05500",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
