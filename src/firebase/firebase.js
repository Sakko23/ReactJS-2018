import firebase from 'firebase/app';
import 'firebase/auth';
var config = {
    apiKey: "AIzaSyAfAvILYAEJkfW9BEZ4_01sW2l4SanElr4",
    authDomain: "fastservice-a8ebb.firebaseapp.com",
    databaseURL: "https://fastservice-a8ebb.firebaseio.com",
    projectId: "fastservice-a8ebb",
    storageBucket: "fastservice-a8ebb.appspot.com",
    messagingSenderId: "698024221397"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

export {
  auth,
};