import React from 'react';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

export default function AuthSignIn(props) {

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

    var firebase = require('firebase');
    var firebaseui = require('firebaseui');

    firebase.initializeApp(firebaseConfig);

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: function() {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none';
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInSuccessUrl: 'https://flatmate-v-01.web.app/dashboard',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };

    ui.start('#firebaseui-auth-container', uiConfig);

    return (
    <div>
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>
        </div>
    );
}