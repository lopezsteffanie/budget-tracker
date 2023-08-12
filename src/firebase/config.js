import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChjfIXHmXJhQcp1tsmc471JDtClrRl-34",
    authDomain: "my-money-8ef14.firebaseapp.com",
    projectId: "my-money-8ef14",
    storageBucket: "my-money-8ef14.appspot.com",
    messagingSenderId: "63386723819",
    appId: "1:63386723819:web:9c95e6abff0cd5fd3125ae"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();

export { projectFirestore };