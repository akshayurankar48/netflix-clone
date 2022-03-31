import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvNHaSf56SZgLgv9qZIXxVb_wih_HXZ4I",
  authDomain: "netflix-clone-yt-c35bd.firebaseapp.com",
  projectId: "netflix-clone-yt-c35bd",
  storageBucket: "netflix-clone-yt-c35bd.appspot.com",
  messagingSenderId: "664531710903",
  appId: "1:664531710903:web:8e81717f74c2f3f2e82e32",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
