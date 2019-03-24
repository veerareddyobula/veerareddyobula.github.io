import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyDOyULyklEt5dt4tiiNqKbpV5xf9xnKcIU",
    authDomain: "veerareddyobula-github-io.firebaseapp.com",
    databaseURL: "https://veerareddyobula-github-io.firebaseio.com",
    projectId: "veerareddyobula-github-io",
    storageBucket: "veerareddyobula-github-io.appspot.com",
    messagingSenderId: "106807866790"
}

class Firebase {
    constructor() {
        app.initializeApp(config)
    }
}

export default Firebase