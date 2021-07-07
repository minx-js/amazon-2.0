import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJc14efoMMhMVHxEJyhq_ysIwqhXw4kUM",
  authDomain: "y-63e7a.firebaseapp.com",
  projectId: "y-63e7a",
  storageBucket: "y-63e7a.appspot.com",
  messagingSenderId: "411249672133",
  appId: "1:411249672133:web:377c5f1d37cf5acdd4d5ac"
};

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db =  app.firestore();

  export default db;