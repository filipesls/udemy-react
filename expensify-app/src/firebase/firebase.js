import * as  firebase from "firebase";

const config = {
    apiKey: "AIzaSyCnGEotAFPqRqB3VGjuEYVfl72OG0OcAWM",
    authDomain: "expensify-73660.firebaseapp.com",
    databaseURL: "https://expensify-73660.firebaseio.com",
    projectId: "expensify-73660",
    storageBucket: "expensify-73660.appspot.com",
    messagingSenderId: "48441421212"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Filipe Santana'
});