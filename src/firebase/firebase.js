import * as firebase from 'firebase';

const FirebaseConfig = {
    apiKey: "AIzaSyDOyULyklEt5dt4tiiNqKbpV5xf9xnKcIU",
    authDomain: "veerareddyobula-github-io.firebaseapp.com",
    databaseURL: "https://veerareddyobula-github-io.firebaseio.com",
    projectId: "veerareddyobula-github-io",
    storageBucket: "veerareddyobula-github-io.appspot.com",
    messagingSenderId: "106807866790"
}
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const bloggerFirebaseRef = databaseRef.child("blogger");