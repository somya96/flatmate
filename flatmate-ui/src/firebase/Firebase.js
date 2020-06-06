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
    this.googleProvider = new app.auth.GoogleAuthProvider();
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

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);
}

export default Firebase;