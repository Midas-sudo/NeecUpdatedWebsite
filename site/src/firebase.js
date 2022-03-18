import firebase from "firebase/compat/app";
import "firebase/compat/database";
let config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY, //FIXME esconder
    authDomain: "neec-chaves.firebaseapp.com",
    databaseURL: "https://neec-chaves-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "neec-chaves",
    storageBucket: "neec-chaves.appspot.com",
    messagingSenderId: "823950398509",
    appId: process.env.VUE_APP_FIREBASE_APP_ID, //FIXME esconder
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID //FIXME esconder
};
firebase.initializeApp(config);
export default firebase.database();