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

const database = firebase.database();

database.ref().on('value', (dataSnapshot) => {
    const val = dataSnapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
});

// const onValueChange = database.ref().on('value', (dataSnapshot) => {
//     console.log(dataSnapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e)
// });

// setTimeout(() => {
//     database.ref('age').set(36);
// }, 3000);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 6000);

// setTimeout(() => {
//     database.ref('age').set(37);
// }, 9000);

// database.ref().once('value')
// .then((dataSnapshot) => {
//     const val = dataSnapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('This failed.' + e);
// });

// database.ref().set({
//     name: 'Filipe Santana',
//     age: 34,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Dublin',
//         country: 'Ireland'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.' + e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Cork'
// });

// database.ref('isSingle').remove()
// .then(function () {
//     console.log("Remove succeeded.")
// })
// .catch(function (error) {
//     console.log("Remove failed: " + error.message)
// });