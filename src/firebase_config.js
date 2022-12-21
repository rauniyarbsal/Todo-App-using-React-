import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARnyfcf6ot6h85fsDMwC5D0NaUhocOM3o",
    authDomain: "todo-app-b9311.firebaseapp.com",
    projectId: "todo-app-b9311",
    storageBucket: "todo-app-b9311.appspot.com",
    messagingSenderId: "766773562739",
    appId: "1:766773562739:web:e7c1ae234baabd99eac906"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;


  