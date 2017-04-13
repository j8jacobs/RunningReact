import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
          apiKey: "AIzaSyAij2putHvgHiXSWcJ5tf66EyJ2uWg-r6s",
          authDomain: "practice1-61f03.firebaseapp.com",
          databaseURL: "https://practice1-61f03.firebaseio.com",
          storageBucket: "practice1-61f03.appspot.com",
        });
    }

}

module.exports = Firebase;
