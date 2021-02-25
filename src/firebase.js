import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL-ZYcng5KullW7WAiXufzMPShvo1hm_M",
  authDomain: "slack-clone-5063b.firebaseapp.com",
  projectId: "slack-clone-5063b",
  storageBucket: "slack-clone-5063b.appspot.com",
  messagingSenderId: "778530897395",
  appId: "1:778530897395:web:2d93d29ba87946086ee686",
  measurementId: "G-CT7F1LTJNE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
