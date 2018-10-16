import firebase from 'firebase';
import 'firebase/firestore';
import config from './config'
 
// Kicking off our connection to Firebase
firebase.initializeApp(config);

const db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});


// This is where ask Firebase to return our document
const fetchAvocados = (callback) => {
    docRef.get().then(function (doc) {
        if (doc.exists) {
            const data = doc.data();
            callback(null, data);
        } else {
            // doc.data() will be undefined in this case
            callback("No such document!");
        }
    }).catch(function (error) {
        callback("Error getting document");
    })
}

// listen for changes to our login state and then try to login anonymously
// We never log out so we don't have to handle that case.
export const loadAvocados = (callback) => {

    firebase.auth().signInAnonymously()
        .then(() => fetchAvocados(callback))
        .catch(function (error) {
            console.log(error);
            callback('Could not log in');
        });

};

// Update Firebase with our new avocados eaten count
export const saveAvocadoCount = (count) => {
    return docRef.set({avocados: count});
};


