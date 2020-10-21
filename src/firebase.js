import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAebb_gj057DhytyVde3WbI65NPeO55zZ8",
  authDomain: "instagram-clone-43654.firebaseapp.com",
  databaseURL: "https://instagram-clone-43654.firebaseio.com",
  projectId: "instagram-clone-43654",
  storageBucket: "instagram-clone-43654.appspot.com",
  messagingSenderId: "915564389699",
  appId: "1:915564389699:web:d64d43bc43fd178ccf3bf6",
  measurementId: "G-5BRCV9BNE6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };

export default db;
