import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyDKiq19QQvCwfgEBb8j0AjKfRx0MfzViNI",
    authDomain: "cfi-data.firebaseapp.com",
    databaseURL: "https://cfi-data-default-rtdb.firebaseio.com",
    projectId: "cfi-data",
    storageBucket: "cfi-data.appspot.com",
    messagingSenderId: "557615259025",
    appId: "1:557615259025:web:068bdc461305f749f08e30",
    measurementId: "G-V5NKESWBTF"
};


firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;