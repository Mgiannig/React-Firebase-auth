import firebase from 'firebase/app';
import 'firebase/auth';


  var firebaseConfig = {
    apiKey: "AIzaSyCYGCR0KkFh-WtTEosTJxHzbj4pTee8Tfo",
    authDomain: "reactauth-3dcc4.firebaseapp.com",
    databaseURL: "https://reactauth-3dcc4.firebaseio.com",
    projectId: "reactauth-3dcc4",
    storageBucket: "reactauth-3dcc4.appspot.com",
    messagingSenderId: "921065420846",
    appId: "1:921065420846:web:abb9b25f07f5f27b8d87bf"
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;