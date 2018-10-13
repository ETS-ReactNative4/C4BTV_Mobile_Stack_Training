import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBY7t5WDzrkadMDn1r8WEM8So7v5oPj9U4",
    authDomain: "avocado-7f336.firebaseapp.com",
    databaseURL: "https://avocado-7f336.firebaseio.com",
    projectId: "avocado-7f336",
    storageBucket: "avocado-7f336.appspot.com",
    messagingSenderId: "993488184580"
};

firebase.initializeApp(config);


firebase.auth().signInAnonymously().catch(function (error) {
    alert(error.message);
});

let uid;
const db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        uid = user.uid;
    } else {
        uid = null;
    }
});

export const saveAvocadoCount = (count) => {
    return db.collection('users').doc(uid).set({avocados: count});
}