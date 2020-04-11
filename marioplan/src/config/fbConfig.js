import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyCkzspwOj66O7eRSRT6wBKVHDLd9EOJl58",
    authDomain: "marioplan-91070.firebaseapp.com",
    databaseURL: "https://marioplan-91070.firebaseio.com",
    projectId: "marioplan-91070",
    storageBucket: "marioplan-91070.appspot.com",
    messagingSenderId: "891267309031",
    appId: "1:891267309031:web:70e6876bc83a2f3e097142",
    measurementId: "G-NXVXJZMTPS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({
     timestampsInSnapshots: true
     })

  export default firebase