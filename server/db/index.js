import firebase from 'firebase'
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB60_XRV32o4cZcHUAfu7wtycqJB82HoQs",
  authDomain: "gitclonewars.firebaseapp.com",
  databaseURL: "https://gitclonewars.firebaseio.com",
  projectId: "gitclonewars",
  storageBucket: "gitclonewars.appspot.com",
  messagingSenderId: "33764840567",
  appId: "1:33764840567:web:8b07ea60a74ba6245ea272",
  measurementId: "G-RM81MR0Z7P"
};

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

dbh.collection("users").doc("test").set({
  email: "test@email.com",
  picture: "https://tinyurl.com/vo9tz25",
  username: "fireball"
})

