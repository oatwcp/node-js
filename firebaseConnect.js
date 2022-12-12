let {initializeApp} = require("firebase/app");
let {getAuth} = require("firebase/auth");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBs3W5cILFswGmTcQfX6ZZ94rK7BK6rtrw",
    authDomain: "jenosize-assignment.firebaseapp.com",
    projectId: "jenosize-assignment",
    storageBucket: "jenosize-assignment.appspot.com",
    messagingSenderId: "239139349394",
    appId: "1:239139349394:web:91ff6e26997c42e417974b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
exports.auth = getAuth();