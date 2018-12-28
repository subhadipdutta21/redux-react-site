import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDi348ELKAXNEZeNCWiC3jIDMbEAldWlXk",
  authDomain: "redux-react-site.firebaseapp.com",
  databaseURL: "https://redux-react-site.firebaseio.com",
  projectId: "redux-react-site",
  storageBucket: "",
  messagingSenderId: "91192712191"
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;