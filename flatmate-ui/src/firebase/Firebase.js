import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAblF8nHmcDhndczZ37f0tQdcg7cFUk2TQ",
  authDomain: "flatmate-v-01.firebaseapp.com",
  databaseURL: "https://flatmate-v-01.firebaseio.com",
  projectId: "flatmate-v-01",
  storageBucket: "flatmate-v-01.appspot.com",
  messagingSenderId: "179657717681",
  appId: "1:179657717681:web:54f7d65c4f2181d24eaf90",
  measurementId: "G-Z99LN82ZYB"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    //this.firestore = app.firestore();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.auth.googleAuthProvider).then(function (result) {
    // this.auth gives you a Google Access Token. You can use it to access the Google API.
    this.auth.token = result.credential.accessToken;
    // The signed-in user info.
    this.auth.user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    this.auth.errorCode = error.code;
    this.auth.errorMessage = error.message;
    // The email of the user's account used.
    this.auth.email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    this.auth.credential = error.credential;
    // ...
  });
}

export default Firebase;