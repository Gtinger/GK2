
import * as firebase from "firebase";

//config fra firebase 
const firebaseConfig = {
  apiKey: "AIzaSyAL_egrOTkdhsXFSmNzB8YXB9H1T3Wt-zw",
  authDomain: "toiletz-a7e6d.firebaseapp.com",
  projectId: "toiletz-a7e6d",
  storageBucket: "toiletz-a7e6d.appspot.com",
  messagingSenderId: "730883661979",
  appId: "1:730883661979:web:2b25ed5b0a43dba8c2663e"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth}