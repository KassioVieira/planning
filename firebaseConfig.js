import firebase from "firebase";
import "firebase/firestore";

// firebase init goes here
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
db.settings(settings);

// firebase collections
const groupsCollection = db.collection("groups");

export { db, groupsCollection };
