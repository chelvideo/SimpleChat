import firebase from 'firebase';

/**
 * Service to initialize Firebase Realtime Database.
 */
const config = {
    apiKey: "AIzaSyCTLmJVzLED4d2wIWSOn-ixoCwExOlQdbw",
    authDomain: "simplechat-63d48.firebaseapp.com",
    databaseURL: "https://simplechat-63d48.firebaseio.com"
};

firebase.initializeApp(config);

export const db = firebase.database();